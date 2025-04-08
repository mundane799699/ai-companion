import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Heroes from "@/components/Heroes";
import Pricing from "@/components/Pricing";

const MarketingPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
        <Features />
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
