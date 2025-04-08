import Navbar from "./_components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full bg-background">
      <Navbar />
      <main className="pt-40">{children}</main>
    </div>
  );
};

export default MainLayout;
