import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductProfile from "@/components/ProductProfile";
import SOPTimeline from "@/components/SOPTimeline";
import AboutGovernance from "@/components/AboutGovernance";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductProfile />
      <SOPTimeline />
      <AboutGovernance />
      <Footer />
    </div>
  );
};

export default Index;
