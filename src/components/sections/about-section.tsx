import Image from "next/image";
import Link from "next/link";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import { Award, Users, Clock, CheckCircle } from "lucide-react";
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
    <section className="py-16 lg:py-20 bg-principal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagem */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-destaque/10 to-claro/5 rounded-2xl transform rotate-3"></div>
            <Image
              src="/images/about-picture.jpg"
              alt="Dra. Brennda no escritório de advocacia"
              width={400}
              height={500}
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
              className="relative rounded-2xl shadow-xl object-cover z-10 w-full h-auto max-w-sm mx-auto lg:max-w-none"
            />
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-destaque mb-2">
              Conheça a Dra. Brennda
            </h2>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-claro leading-tight mb-6">
              Inteligência jurídica
              <br />
              <span className="text-destaque">com olhar humano</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6">
              Dra. Brennda Silva é uma advogada que alia técnica, empatia e visão estratégica para transformar conflitos em soluções reais. Com uma abordagem moderna e acessível, atua de forma próxima, clara e eficaz — sempre com foco no que realmente importa: proteger direitos, construir confiança e gerar resultados.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-4">
              Sua atuação se destaca pela condução firme, análise minuciosa e comprometimento absoluto com cada cliente. Com posicionamento claro e tomada de decisão segura, oferece não apenas orientação jurídica — mas direção, respaldo e soluções que fazem a diferença.
            </p>
            
            <Link href="/a-advogada" className="text-destaque hover:text-destaque/80 font-bold mb-8 inline-block text-sm sm:text-base">
              Conheça a trajetória &rarr;
            </Link>

            {/* Destaques */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-destaque/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-4 sm:h-5 w-4 sm:w-5 text-destaque" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-claro text-sm sm:text-base">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <WhatsappButton size="lg" iconSize={20} className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold">
                <span className="uppercase">Solicitar Atendimento Jurídico</span>
              </WhatsappButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
