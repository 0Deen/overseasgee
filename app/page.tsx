import Hero from "@/components/Hero";
import JobCategories from "@/components/JobCategories";
import { GulfShowcase } from "@/components/GulfShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";

// Navbar and Footer render once from app/layout.tsx now, so every route
// shares them automatically — see the comment there.
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-brand-purple/5 to-white">
      <GulfShowcase />
      <Hero />
      <JobCategories />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}
