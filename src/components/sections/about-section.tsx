import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCircle } from "lucide-react";
import { LAWYER_PLACEHOLDERS } from "@/lib/placeholders";

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
              src={LAWYER_PLACEHOLDERS.office}
              alt="Dra. Brennda no escritório de advocacia"
              width={500}
              height={600}
              className="relative rounded-2xl shadow-xl object-cover z-10"
            />
          </div>

          {/* Conteúdo */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-claro mb-6">
              Conheça a <span className="text-destaque">Dra. Brennda</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Formada em Direito pela Universidade de São Paulo (USP), com especialização 
              em Direito de Família e Sucessões. Pós-graduada em Direito Civil e 
              Processual Civil, atua há mais de 10 anos defendendo os direitos de 
              pessoas físicas e jurídicas.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Minha missão é oferecer um atendimento humanizado e personalizado, 
              sempre buscando as melhores soluções jurídicas para cada caso, 
              com ética, transparência e dedicação integral aos meus clientes.
            </p>

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
              <Button size="lg" asChild>
                <Link href="/a-advogada">
                  Saiba Mais
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contato">
                  Agendar Consulta
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
