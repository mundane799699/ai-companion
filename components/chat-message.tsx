"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import BotAvatar from "@/components/bot-avatar";
import { BeatLoader } from "react-spinners";
import UserAvatar from "@/components/user-avatar";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export interface ChatMessageProps {
  role: "system" | "user";
  content?: string;
  isLoading?: boolean;
  companionSrc?: string;
}

export const ChatMessage = ({
  role,
  content,
  isLoading,
  companionSrc,
}: ChatMessageProps) => {
  const { theme } = useTheme();

  const onCopy = () => {
    if (!content) {
      return;
    }
    navigator.clipboard.writeText(content);
    toast.success("Message copied to clipboard");
  };

  return (
    <div
      className={cn(
        "group flex items-start gap-x-3 py-4 w-full",
        role === "user" && "justify-end"
      )}
    >
      {role !== "user" && companionSrc && <BotAvatar src={companionSrc} />}
      <div className="rounded-md px-4 py-2 max-w-sm text-sm bg-primary/10">
        {isLoading ? (
          <BeatLoader color={theme === "light" ? "black" : "white"} size={5} />
        ) : (
          content
        )}
      </div>
      {role === "user" && <UserAvatar />}
      {role !== "user" && !isLoading && (
        <Button
          onClick={onCopy}
          className="opacity-0 group-hover:opacity-100 transition"
          size="icon"
          variant="ghost"
        >
          <Copy className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};
