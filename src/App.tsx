import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ThermalStats from "./components/ThermalStats";
import VariantShowcase from "./components/VariantShowcase";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-rock text-silver font-body min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ThermalStats />
        <VariantShowcase />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
