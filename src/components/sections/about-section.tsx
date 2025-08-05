import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCircle, MessageCircle } from "lucide-react";
import { LAWYER_PLACEHOLDERS } from "@/lib/placeholders";
// importação removida, usando SVG estático

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "10+ Anos de Experiência",
      description: "Sólida experiência em diversas áreas do direito"
    },
    {
      icon: Users,
      title: "500+ Clientes Atendidos",
      description: "Casos resolvidos com sucesso e satisfação"
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Resposta rápida e acompanhamento constante"
    },
    {
      icon: CheckCircle,
      title: "95% de Aprovação",
      description: "Alta taxa de sucesso nos casos defendidos"
    }
  ];

  return (
    <section className="py-20 bg-principal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-destaque/10 to-claro/5 rounded-2xl transform rotate-3"></div>
            <Image
              src="/images/about-picture.jpg"
              alt="Dra. Brennda no escritório de advocacia"
              width={500}
              height={600}
              className="relative rounded-2xl shadow-xl object-cover z-10"
            />
          </div>

          {/* Conteúdo */}
          <div>
            <h2 className="text-lg lg:text-xl font-semibold text-destaque mb-2">
              Conheça a Dra. Brennda
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-claro leading-tight mb-6">
              Inteligência jurídica
              <br />
              <span className="text-destaque">com olhar humano</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Dra. Brennda Silva é uma advogada que alia técnica, empatia e visão estratégica para transformar conflitos em soluções reais. Com uma abordagem moderna e acessível, atua de forma próxima, clara e eficaz — sempre com foco no que realmente importa: proteger direitos, construir confiança e gerar resultados.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Sua atuação se destaca pela condução firme, análise minuciosa e comprometimento absoluto com cada cliente. Com posicionamento claro e tomada de decisão segura, oferece não apenas orientação jurídica — mas direção, respaldo e soluções que fazem a diferença.
            </p>
            
            <Link href="/a-advogada" className="text-destaque hover:text-destaque/80 font-bold mb-8 inline-block">
              Conheça a trajetória &rarr;
            </Link>

            {/* Destaques */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-destaque/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-destaque" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-claro text-sm">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-400 text-xs">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group bg-destaque hover:bg-destaque/90 text-claro border-0 px-4 py-6 text-lg font-semibold min-w-0">
                <Link href="/contato" className="flex items-center gap-2">
                  <img src="/icons/icon-whatsapp.svg" alt="WhatsApp" className="w-7 h-7" width={28} height={28} loading="eager" />
                  <span className="uppercase">Solicitar Atendimento Jurídico</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
