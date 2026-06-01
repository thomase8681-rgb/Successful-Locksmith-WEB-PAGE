import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import FeatureStrip from "@/components/FeatureStrip";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <FeatureStrip />
        <WhyUs />
        <Pricing />
        <Reviews />
        <ServiceArea />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
