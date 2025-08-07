"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Users, 
  FileText, 
  ShieldCheck,
  Home,
  RotateCcw
} from "lucide-react";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
// importação removida, usando SVG estático

const practiceAreas = [
  {
    icon: Users,
    title: "Direito de Família",
    description: "Divórcio, união estável, guarda de filhos, pensão alimentícia e questões familiares.",
    detailedServices: [
      "Divórcio e Separação",
      "União Estável", 
      "Guarda de Filhos",
      "Pensão Alimentícia",
      "Adoção",
      "Inventário e Partilha",
      "Reconhecimento de Paternidade",
      "Alienação Parental",
      "Regulamentação de Visitas",
      "Planejamento Sucessório"
    ],
    href: "/areas-de-atuacao#direito-de-familia"
  },
  {
    icon: ShieldCheck,
    title: "Direito do Consumidor",
    description: "Defesa dos direitos do consumidor e resolução de conflitos comerciais.",
    detailedServices: [
      "Indenizações",
      "Cancelamentos",
      "Vícios de Produtos",
      "Serviços Defeituosos",
      "Contratos Abusivos",
      "Cobrança Indevida",
      "Negativação Irregular",
      "Problemas Bancários",
      "Planos de Saúde",
      "Compras Online"
    ],
    href: "/areas-de-atuacao#direito-do-consumidor"
  },
  {
    icon: FileText,
    title: "Direito Civil",
    description: "Indenizações, responsabilidade civil, direitos reais e obrigações contratuais.",
    detailedServices: [
      "Danos Morais",
      "Danos Materiais",
      "Responsabilidade Civil",
      "Direitos Reais",
      "Contratos",
      "Sucessões",
      "Direito das Obrigações",
      "Direitos da Personalidade",
      "Posse e Propriedade",
      "Indenizações Diversas"
    ],
    href: "/areas-de-atuacao#direito-civil"
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description: "Compra e venda, locação, regularização e questões condominiais.",
    detailedServices: [
      "Compra e Venda",
      "Contratos de Locação",
      "Regularização Fundiária",
      "Questões Condominiais",
      "Usucapião",
      "Financiamentos",
      "Registro de Imóveis",
      "Incorporação Imobiliária",
      "Despejo e Cobrança",
      "Revisão de Aluguel"
    ],
    href: "/areas-de-atuacao#direito-imobiliario"
  }
];

const PracticeAreasSection = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-8 lg:py-16 bg-secundario">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-principal mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Oferecemos soluções jurídicas especializadas com foco na defesa dos seus 
            direitos e interesses, sempre com atendimento personalizado e estratégias eficazes.
          </p>
        </div>

        {/* Grid de Áreas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            const isFlipped = flippedCards.includes(index);
            return (
              <div
                key={index}
                className="group relative h-52 md:h-60 perspective-1000"
              >
                {/* Card Container with flip effect */}
                <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''} lg:group-hover:rotate-y-180`}>
                  
                  {/* Front Face */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden bg-claro p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 flex flex-col items-center text-center justify-center cursor-pointer lg:cursor-default"
                    onClick={() => toggleCard(index)}
                  >
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-destaque/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-destaque/20 transition-colors flex-shrink-0">
                      <IconComponent className="h-8 sm:h-10 w-8 sm:w-10 text-destaque" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-principal mb-2">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                      {area.description}
                    </p>
                    
                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full">
                      <Link
                        href={area.href}
                        className="flex-1 text-center bg-destaque/10 text-destaque py-2 px-3 rounded-lg text-xs font-medium hover:bg-destaque/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Saiba Mais
                      </Link>
                    </div>
                    
                    {/* Mobile flip indicator */}
                    <div className="absolute top-3 right-3 lg:hidden">
                      <div className="bg-destaque/20 rounded-full p-1.5">
                        <RotateCcw className="h-3 w-3 text-destaque" style={{ animation: 'pulse 2s infinite' }} />
                      </div>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div 
                    className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-destaque p-2 sm:p-4 rounded-xl shadow-lg border border-destaque/20 flex flex-col cursor-pointer lg:cursor-default"
                    onClick={() => toggleCard(index)}
                  >
                    {/* Close button for mobile */}
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <div className="flex items-center">
                        <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 text-white mr-1" />
                        <h3 className="text-xs sm:text-base font-semibold text-white">
                          {area.title}
                        </h3>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(index);
                        }}
                        className="lg:hidden bg-white/20 rounded-full p-1 hover:bg-white/30 transition-colors"
                        aria-label="Fechar detalhes"
                      >
                        <RotateCcw className="h-3 w-3 text-white" />
                      </button>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center min-h-0 overflow-hidden">
                      <div className="grid grid-cols-2 gap-x-1 sm:gap-x-2 gap-y-1 sm:gap-y-1.5 text-white/90 text-xs">
                        {area.detailedServices.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-start">
                            <div className="w-1 h-1 bg-white/60 rounded-full mr-1 sm:mr-1.5 flex-shrink-0 mt-1"></div>
                            <span className="leading-tight text-xs">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      href={area.href}
                      className="mt-1 sm:mt-2 w-full bg-white/20 backdrop-blur-sm text-white text-center py-1 px-2 rounded-lg text-xs font-medium hover:bg-white/30 transition-colors flex-shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            Precisa de orientação jurídica em alguma dessas áreas?
          </p>
          <div className="flex justify-center">
            <WhatsappButton size="lg" iconSize={28} className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold">
              <span className="uppercase">Falar no WhatsApp</span>
            </WhatsappButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
