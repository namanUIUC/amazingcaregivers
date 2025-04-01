import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/AboutUs";
import ServicesFeatures from "@/components/ServicesFeatures";
import CallToAction from "@/components/CallToAction";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <ServicesFeatures />
      <CallToAction />
      <FAQSection />
      <Footer />
    </div>
  );
}
