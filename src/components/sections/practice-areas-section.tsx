import Link from "next/link";
import { 
  Heart, 
  FileText, 
  Handshake, 
  ShieldCheck,
  Users,
  Home,
  Briefcase,
  Scale,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
// importação removida, usando SVG estático

const practiceAreas = [
  {
    icon: Heart,
    title: "Direito de Família",
    description: "Divórcio, união estável, guarda de filhos, pensão alimentícia e adoção.",
    href: "/servicos/familia-e-sucessoes"
  },
  {
    icon: FileText,
    title: "Direito Civil",
    description: "Indenizações, responsabilidade civil, direitos reais e obrigações.",
    href: "/servicos/direito-civil"
  },
  {
    icon: Handshake,
    title: "Contratos",
    description: "Elaboração, revisão e assessoria em contratos empresariais e pessoais.",
    href: "/servicos/contratos"
  },
  {
    icon: ShieldCheck,
    title: "Direito do Consumidor",
    description: "Defesa dos direitos do consumidor e resolução de conflitos comerciais.",
    href: "/servicos/direito-do-consumidor"
  },
  {
    icon: Users,
    title: "Sucessões",
    description: "Inventário, testamento, planejamento sucessório e partilha de bens.",
    href: "/servicos/familia-e-sucessoes"
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description: "Compra e venda, locação, regularização e questões condominiais.",
    href: "/servicos/direito-civil"
  },
  {
    icon: Briefcase,
    title: "Direito Empresarial",
    description: "Constituição de empresas, contratos comerciais e consultoria jurídica.",
    href: "/servicos/contratos"
  },
  {
    icon: Scale,
    title: "Mediação e Arbitragem",
    description: "Resolução alternativa de conflitos de forma eficiente e econômica.",
    href: "/contato"
  }
];

const PracticeAreasSection = () => {
  return (
    <section className="py-20 bg-secundario">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Oferecemos soluções jurídicas especializadas com foco na defesa dos seus 
            direitos e interesses, sempre com atendimento personalizado e estratégias eficazes.
          </p>
        </div>

        {/* Grid de Áreas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Link
                key={index}
                href={area.href}
                className="group bg-claro p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-destaque/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-destaque/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-destaque group-hover:text-principal transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-principal mb-2 group-hover:text-destaque transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-700 mb-6">
            Precisa de orientação jurídica em alguma dessas áreas?
          </p>
          <Button size="lg" asChild className="group bg-destaque hover:bg-destaque/90 text-claro border-0 px-4 py-6 text-lg font-semibold min-w-0">
            <Link href="/contato" className="flex items-center gap-2">
              <img src="/icons/icon-whatsapp.svg" alt="WhatsApp" className="w-7 h-7" width={28} height={28} loading="eager" />
              <span className="uppercase">Falar no WhatsApp</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
