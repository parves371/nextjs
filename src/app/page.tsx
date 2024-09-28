import FeturedSection from "@/components/FeturedSection";
import HeroSection from "@/components/HeroSection";
import OpcomingWebinars from "@/components/OpcomingWebinars";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <div>
        <HeroSection />
        <FeturedSection />
        <WhyChooseUs />
        <Testimonial />
        <OpcomingWebinars />
      </div>
    </main>
  );
}
