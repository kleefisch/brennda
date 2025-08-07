import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ContactForm from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato - Advocacia Brennda Silva | Agende sua Consulta Gratuita",
  description: "Entre em contato com a Dra. Brennda Silva. Consulta gratuita, atendimento 24h no WhatsApp. Advocacia especializada em Direito de Família, Civil e Consumidor.",
  keywords: "contato, advocacia, consulta gratuita, Brennda Silva, advogada, direito de família, WhatsApp, telefone",
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-claro mb-6">
                Entre em Contato
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Agende sua consulta gratuita e conte com orientação jurídica especializada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsappButton size="lg" iconSize={28} className="bg-destaque hover:bg-destaque/90 text-claro">
                  <span className="uppercase">FALAR NO WHATSAPP</span>
                </WhatsappButton>
                <Button size="lg" variant="outline" asChild className="border-claro text-claro hover:bg-claro hover:text-principal">
                  <Link 
                    href="#contato"
                    className="transition-colors duration-200 hover:bg-[#29406a] hover:text-destaque focus-visible:ring-2 focus-visible:ring-destaque focus:outline-none"
                  >
                    Preencher Formulário
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contato">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
