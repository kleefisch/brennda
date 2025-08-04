import type { Metadata } from "next";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero-section";
import PracticeAreasSection from "@/components/sections/practice-areas-section";
import AboutSection from "@/components/sections/about-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FAQSection from "@/components/sections/faq-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Dra. Brennda - Advocacia Especializada em São Paulo",
  description: "Advocacia especializada em Direito de Família, Civil, Contratos e Direito do Consumidor. Mais de 10 anos de experiência, atendimento personalizado e consulta gratuita. Agende já!",
  keywords: ["advocacia", "advogada", "direito de família", "direito civil", "contratos", "direito do consumidor", "são paulo", "consulta gratuita"],
  openGraph: {
    title: "Dra. Brennda - Advocacia Especializada em São Paulo",
    description: "Advocacia especializada com mais de 10 anos de experiência. Consulta gratuita.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PracticeAreasSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
