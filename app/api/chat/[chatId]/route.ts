import { customProvider, generateText, streamText } from "ai";
import { auth, currentUser } from "@clerk/nextjs/server";
import { rateLimit } from "@/lib/rate-limit";
import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { MemoryManager } from "@/lib/memory";
import prismadb from "@/lib/prismadb";
import { createXai } from "@ai-sdk/xai";

export async function POST(
  request: Request,
  { params }: { params: { chatId: string } }
) {
  try {
    const { prompt } = await request.json();
    const user = await currentUser();
    if (!user || !user.firstName || !user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const identifier = request.url + "_" + user.id;
    const { success } = await rateLimit(identifier);
    if (!success) {
      return new NextResponse("Rate limit exceeded", { status: 429 });
    }
    const { chatId } = await params;
    const companion = await prismadb.companion.update({
      where: {
        id: chatId,
      },
      data: {
        messages: {
          create: {
            role: "user",
            content: prompt,
            userId: user.id,
          },
        },
      },
    });
    if (!companion) {
      return new NextResponse("Companion not found", { status: 404 });
    }

    const name = companion.id;
    const companion_file_name = name + ".txt";
    const companionKey = {
      companionName: name,
      userId: user.id,
      modelName: "grok-2-1212",
    };
    const memoryManager = await MemoryManager.getInstance();
    const records = await memoryManager.readLatestHistory(companionKey);
    if (records.length === 0) {
      await memoryManager.seedChatHistory(companion.seed, "\n\n", companionKey);
    }
    await memoryManager.writeToHistory("User: " + prompt + "\n", companionKey);
    const recentChatHistory = await memoryManager.readLatestHistory(
      companionKey
    );
    const similarDocs = await memoryManager.vectorSearch(
      recentChatHistory,
      companion_file_name
    );
    let relevantHistory = "";
    if (!!similarDocs && similarDocs.length !== 0) {
      relevantHistory = similarDocs.map((doc) => doc.pageContent).join("\n");
    }

    const inputPrompt = `
        ONLY generate plain sentences without prefix of who is speaking. DO NOT use ${companion.name}: prefix. 

        ${companion.instructions}

        Below are relevant details about ${companion.name}'s past and the conversation you are in.
        ${relevantHistory}


        ${recentChatHistory}\n${companion.name}:`;

    const xai = createXai({
      apiKey: process.env.XAI_API_KEY,
    });

    const result = streamText({
      model: xai("grok-2-1212"),
      prompt: inputPrompt,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.log("[CHAT_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
