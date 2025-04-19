import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prismadb";
import { Categories } from "@/components/categories";
import { Companions } from "@/components/companions";
import { auth } from "@clerk/nextjs/server";
import { RedirectToSignIn } from "@clerk/nextjs";

interface RootPageProps {
  searchParams: Promise<{ categoryId: string; name: string }>;
}

const RootPage = async ({ searchParams }: RootPageProps) => {
  const { userId } = await auth();
  if (!userId) {
    return <RedirectToSignIn />;
  }
  const { categoryId, name } = await searchParams;
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: categoryId,
      name: {
        contains: name,
        mode: "insensitive",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          messages: {
            where: {
              userId: userId!,
            },
          },
        },
      },
    },
  });
  const categories = await prismadb.category.findMany();
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories data={categories} />
      <Companions data={data} />
    </div>
  );
};

export default RootPage;
