import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { LAWYER_PLACEHOLDERS } from "@/lib/placeholders";

const HeroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Defendendo seus{" "}
              <span className="text-primary">direitos</span> com
              <span className="text-accent"> excelência</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Advocacia especializada com mais de 10 anos de experiência em
              Direito de Família, Civil, Contratos e Direito do Consumidor. 
              Atendimento personalizado e soluções jurídicas eficazes.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" asChild className="group">
                <Link href="/contato">
                  Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/areas-de-atuacao">
                  Áreas de Atuação
                </Link>
              </Button>
            </div>

            {/* Contato Rápido */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp 24h</span>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <Image
                src={LAWYER_PLACEHOLDERS.portrait}
                alt="Dra. Brennda - Advogada especializada"
                width={400}
                height={500}
                priority
                className="relative rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
