import Image from "next/image";
import Link from "next/link";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import { Award, Clock, CheckCircle, IdCard } from "lucide-react";
// importação removida, usando SVG estático

const AboutSection = () => {
  const highlights = [
    {
      icon: IdCard,
      title: "OAB/GO 71.841",
      description: "Sólida experiência em Direito Civil"
    },
    {
      icon: Award,
      title: "Formação de Excelência",
      description: "Graduação em Direito e constante atualização profissional"
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Resposta rápida e acompanhamento constante"
    },
    {
      icon: CheckCircle,
      title: "Compromisso com o Cliente",
      description: "Dedicação total e ética em cada caso atendido"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-principal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Conteúdo */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-destaque mb-2 text-center lg:text-left">
              Conheça a Dra. Brennda
            </h2>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-claro leading-tight mb-6 text-center lg:text-left">
              Inteligência jurídica
              <br />
              <span className="text-destaque">com olhar humano</span>
            </h1>
            
            {/* Imagem no mobile - aparece após o título */}
            <div className="lg:hidden relative flex items-center justify-center mb-6">
              <div className="relative w-full max-w-sm h-full min-h-[300px] sm:min-h-[350px]">
                <div className="absolute inset-0 bg-gradient-to-br from-destaque/10 to-claro/5 rounded-2xl transform rotate-3"></div>
                <div className="relative w-full h-full">
                  <Image
                    src="/images/about-picture.jpg"
                    alt="Dra. Brennda no escritório de advocacia"
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="rounded-2xl shadow-xl object-cover object-top z-10"
                    priority
                  />
                </div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-gray-300 mb-6 text-center lg:text-left">
              Dra. Brennda Silva é uma advogada que alia técnica, empatia e visão estratégica para transformar conflitos em soluções reais. Com uma abordagem moderna e acessível, atua de forma próxima, clara e eficaz — sempre com foco no que realmente importa: proteger direitos, construir confiança e gerar resultados.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-4 text-center lg:text-left">
              Sua atuação se destaca pela condução firme, análise minuciosa e comprometimento absoluto com cada cliente. Com posicionamento claro e tomada de decisão segura, oferece não apenas orientação jurídica — mas direção, respaldo e soluções que fazem a diferença.
            </p>
            
            <div className="text-center lg:text-left mb-8">
              <Link
                href="/a-advogada"
                className="text-destaque font-bold inline-block text-sm sm:text-base transition-all group hover:text-destaque/80"
              >
                <span className="inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Conheça a trajetória
                  <span className="inline-block transform transition-transform group-hover:translate-x-1 group-hover:scale-110">&rarr;</span>
                </span>
              </Link>
            </div>

            {/* Destaques - Sempre alinhados à esquerda */}
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
              <WhatsappButton size="lg" iconSize={28} className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg font-semibold w-full sm:w-auto">
                <span className="uppercase leading-relaxed">Solicitar Atendimento Jurídico</span>
              </WhatsappButton>
            </div>
          </div>
          
          {/* Imagem no desktop - oculta no mobile */}
          <div className="hidden lg:flex relative order-1 items-center justify-start">
            <div className="relative w-full max-w-md xl:max-w-lg 2xl:max-w-xl h-full min-h-[450px] xl:min-h-[500px] 2xl:min-h-[550px]">
              <div className="absolute inset-0 bg-gradient-to-br from-destaque/10 to-claro/5 rounded-2xl transform rotate-3"></div>
              <div className="relative w-full h-full">
                <Image
                  src="/images/about-picture.jpg"
                  alt="Dra. Brennda no escritório de advocacia"
                  fill
                  sizes="(max-width: 1024px) 50vw, 400px"
                  className="rounded-2xl shadow-xl object-cover object-top z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
