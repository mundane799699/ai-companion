interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

import prismadb from "@/lib/prismadb";
import CompanionForm from "./components/companion-form";
import { auth } from "@clerk/nextjs/server";
import { RedirectToSignIn } from "@clerk/nextjs";
const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  const { userId } = await auth();
  if (!userId) {
    return <RedirectToSignIn />;
  }
  // todo: check subscription

  const { companionId } = await params;
  const companion = await prismadb.companion.findUnique({
    where: {
      id: companionId,
      userId,
    },
  });

  const categories = await prismadb.category.findMany();
  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionIdPage;
