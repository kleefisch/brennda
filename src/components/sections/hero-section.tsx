import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock } from "lucide-react";
// importação removida, usando SVG estático
import { LAWYER_PLACEHOLDERS } from "@/lib/placeholders";

const HeroSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-principal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-bold text-claro leading-tight mb-6">
              Defendendo seus{" "}
              <span className="text-destaque">direitos</span> com
              <span className="text-destaque"> excelência</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Conte com uma advogada que luta incansavelmente pelos seus interesses com a determinação e estratégia que você merece.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" asChild className="group bg-destaque hover:bg-destaque/90 text-claro border-0 px-4 py-6 text-lg font-semibold min-w-0">
                <Link href="/contato" className="flex items-center gap-2">
                  <img src="/icons/icon-whatsapp.svg" alt="WhatsApp" className="w-7 h-7" width={28} height={28} loading="eager" />
                  <span className="uppercase">Fale com a Advogada</span>
                </Link>
              </Button>
            </div>

            {/* Contato Rápido */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-4 w-4" />
                <span>WhatsApp 24h</span>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 rounded-2xl"></div>
              <Image
                src="/images/hero-picture.png"
                alt="Dra. Brennda - Advogada especializada"
                width={550}
                height={700}
                priority
                className="relative rounded-2xl shadow-2xl object-cover w-full max-w-lg lg:max-w-xl h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
