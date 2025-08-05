import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle,
  MessageCircle,
  Shield,
  Eye,
  Target,
  Award,
  Quote,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "A Advogada | Dra. Brennda Silva - Advocacia Especializada",
  description: "Conheça a Dra. Brennda Silva: advocacia séria, olhar humano, compromisso com resultados. Atendimento moderno e estratégico.",
  keywords: "Dra. Brennda Silva, advocacia moderna, direito de família, direito civil, direito do consumidor",
};

const AboutPage = () => {
  const processSteps = [
    {
      number: "01",
      title: "Avaliação do Caso",
      description: "Entendemos sua situação com acolhimento e clareza. Primeiro contato sem compromisso, onde você é ouvido(a) com respeito e orientado(a) com simplicidade."
    },
    {
      number: "02", 
      title: "Plano Jurídico Claro",
      description: "Traçamos a melhor estratégia para o seu caso. Com base nos seus objetivos, definimos o caminho: acordo, ação ou medida urgente."
    },
    {
      number: "03",
      title: "Execução Completa", 
      description: "Cuidamos de toda a parte técnica. Documentos, contratos, petições, prazos — tudo tratado com precisão e agilidade."
    },
    {
      number: "04",
      title: "Acompanhamento Transparente",
      description: "Você sabe de tudo, sempre. Atualizações constantes e explicações sem juridiquês. Comunicação clara do início ao fim."
    },
    {
      number: "05",
      title: "Conclusão Segura",
      description: "Fechamos com responsabilidade e orientamos os próximos passos. Entregamos soluções reais e segurança jurídica para o que vem depois."
    }
  ];

  const pillars = [
    {
      icon: Shield,
      title: "Integridade",
      description: "Atuação ética e transparente em todas as fases do processo."
    },
    {
      icon: Eye,
      title: "Confidencialidade", 
      description: "Proteção absoluta das suas informações e interesses."
    },
    {
      icon: Target,
      title: "Foco no Resultado",
      description: "Estratégias jurídicas voltadas para alcançar seus objetivos."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com o mais alto padrão de qualidade técnica."
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-principal">
        
        {/* Hero Section - Azul */}
        <section className="py-16 lg:py-20 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Conteúdo Textual */}
              <div className="text-claro">

                
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Quem é a<br />
                  <span className="text-destaque">
                    Dra. Brennda Silva
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl font-light mb-8 text-gray-200 leading-relaxed">
                  Advocacia <span className="text-destaque font-medium">séria</span> e <span className="text-destaque font-medium">humana</span>. 
                  Resultados que <span className="text-destaque font-medium">funcionam</span>.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <WhatsappButton size="lg" iconSize={20} className="px-8 py-4 text-lg font-semibold">
                    <span className="uppercase">INICIAR ATENDIMENTO</span>
                  </WhatsappButton>
                  <Button size="lg" variant="outline" asChild className="border-claro/30 text-claro hover:bg-claro/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold">
                    <Link href="/areas-de-atuacao">
                      Áreas de Atuação
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Imagem com Design Moderno */}
              <div className="relative">
                <div className="relative">
                  {/* Card Principal */}
                  <div className="relative bg-claro/10 backdrop-blur-xl rounded-3xl p-8 border border-claro/20">
                    <div className="relative w-full h-[28rem] lg:h-[32rem] rounded-2xl overflow-hidden mb-6">
                      <Image
                        src="/images/brennda.jpg"
                        alt="Dra. Brennda Silva"
                        fill
                        className="object-cover object-top scale-x-[-1]"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-principal/40 to-transparent"></div>
                    </div>
                    
                    {/* Info Cards Inline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-claro">
                        <div className="w-10 h-10 bg-destaque/20 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-destaque" />
                        </div>
                        <div>
                          <p className="font-semibold">OAB/SP Ativa</p>
                          <p className="text-sm text-gray-300">Registro Profissional</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-claro">
                        <div className="w-10 h-10 bg-destaque/20 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5 text-destaque" />
                        </div>
                        <div>
                          <p className="font-semibold">Pós-Graduação</p>
                          <p className="text-sm text-gray-300">Direito Civil e Processual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Sobre a Advogada - Bege */}
        <section className="py-20 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-6">
                  Compromisso com pessoas, resultados e ética
                </h2>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                  Conhecimento técnico e sensibilidade humana em cada atendimento
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-principal mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-destaque" />
                    Formação Sólida
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-destaque mt-1 flex-shrink-0" />
                      <span><strong>Graduação em Direito</strong> pelo IPOG</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-destaque mt-1 flex-shrink-0" />
                      <span><strong>Gestão em Segurança Pública</strong> pela Faculdade Sul D'América</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-destaque mt-1 flex-shrink-0" />
                      <span><strong>Pós-graduação</strong> em Direito Civil e Processual Civil</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-principal mb-4 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-destaque" />
                    Filosofia de Trabalho
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong className="text-destaque">Ouvir</strong> com atenção, 
                      <strong className="text-destaque"> orientar</strong> com clareza, 
                      <strong className="text-destaque"> agir</strong> com responsabilidade.
                    </p>
                    <p>
                      Cada caso é acompanhado de perto, com <strong>empatia</strong> e <strong>estratégia</strong>, 
                      garantindo que você se sinta seguro do início ao fim.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Destacada */}
              <div className="relative bg-principal/5 rounded-2xl p-8 lg:p-12 border border-principal/10">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-destaque/30" />
                <blockquote className="text-2xl lg:text-3xl font-light text-principal text-center italic leading-relaxed">
                  "Cada cliente é único. Cada caso é uma oportunidade de aplicar a lei com 
                  inteligência, empatia e firmeza."
                </blockquote>
                <div className="w-16 h-1 bg-destaque mx-auto mt-8"></div>
              </div>

            </div>
          </div>
        </section>

        {/* Metodologia - Azul - Design Reformulado */}
        <section className="py-20 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-destaque mb-4 tracking-tight drop-shadow-sm">
                Uma advocacia que funciona
              </h2>
              <p className="text-xl text-claro max-w-2xl mx-auto mb-2">
                Moderna, estratégica e sempre focada em resultados
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Técnica + Humanidade */}
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <HeartHandshake className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">Técnica + Humanidade</h3>
                  <p className="text-principal">
                    Profundidade técnica combinada com sensibilidade humana. A advocacia começa quando você precisa ser ouvido de verdade.
                  </p>
                </div>

                {/* Comunicação Clara */}
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <MessageCircle className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">Comunicação Clara</h3>
                  <p className="text-principal">
                    Sem juridiquês, com total transparência. Você se sente seguro em cada passo do processo.
                  </p>
                </div>

                {/* Foco em Soluções */}
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <CheckCircle className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">Foco em Soluções</h3>
                  <p className="text-principal">
                    Especialista em Direito de Família, Civil e do Consumidor. Transforma conflitos em caminhos de resolução.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processo de Atendimento - Bege */}
        <section className="py-24 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-principal mb-4 tracking-tight">Atendimento que acolhe, resolve e acompanha</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">Mais do que processos: uma experiência próxima, humana e eficiente do início ao fim.</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1 */}
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <MessageCircle className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">Primeiro Contato</h3>
                  <p className="text-principal">Escuta ativa, acolhimento e orientação inicial sem compromisso.</p>
                </div>

                {/* Card 2 */}
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <FileText className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">Plano Jurídico</h3>
                  <p className="text-principal">Estratégia personalizada, explicada de forma simples e transparente.</p>
                </div>

                {/* Card 3 */}
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <CheckCircle className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">Execução Completa</h3>
                  <p className="text-principal">Cuidamos de toda a parte técnica e burocrática, com agilidade e precisão.</p>
                </div>

                {/* Card 4 */}
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Sparkles className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">Acompanhamento Real</h3>
                  <p className="text-principal">Atualizações constantes, suporte próximo e linguagem acessível até a solução final.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares - Azul */}
        <section className="py-28 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-destaque mb-4 tracking-tight drop-shadow-sm">Nossos Pilares</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">Os valores que guiam cada decisão, cada relação e cada conquista.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={index}
                    className="text-center bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                      <IconComponent className="h-8 w-8 text-destaque" />
                    </div>
                    <h3 className="text-xl font-bold text-principal mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-principal">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Final - Bege */}
        <section className="py-20 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-principal mb-6">
                Vamos conversar sobre sua necessidade jurídica?
              </h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Atendimento humano, direto ao ponto e com total transparência.<br />
                Tire suas dúvidas ou agende uma consulta agora mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <WhatsappButton size="lg" iconSize={24} className="px-10 py-5 text-xl font-bold">
                  <span className="uppercase text-white">CONSULTAR ADVOGADA</span>
                </WhatsappButton>
                <Button size="lg" variant="outline" asChild className="border-principal/30 text-principal hover:bg-principal/10 px-10 py-5 text-xl font-semibold">
                  <Link href="/areas-de-atuacao" className="bg-principal text-claro hover:bg-principal/90 border-0 px-10 py-5 rounded-2xl transition-colors font-semibold">
                    Conheça as Especialidades
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
