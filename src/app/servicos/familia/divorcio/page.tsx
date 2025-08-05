import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Handshake, 
  Scale, 
  Users, 
  FileText, 
  Clock, 
  Shield, 
  CheckCircle,
  Phone,
  MessageCircle,
  Calendar,
  Search
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Divórcio - Advocacia Brennda Silva | Especialista em Direito de Família",
  description: "Especialista em divórcio consensual e litigioso. Acompanhamento completo com foco na proteção dos direitos e bem-estar das partes envolvidas. Atendimento personalizado.",
  keywords: "divórcio, separação, direito de família, advogada, Brennda Silva, divórcio consensual, divórcio litigioso",
};

export default function DivorcioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-destaque/20 text-destaque px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Handshake className="w-4 h-4" />
                Direito de Família
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-claro mb-6">
                Divórcio
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Acompanhamento completo em separações amigáveis ou judiciais, sempre priorizando o diálogo, 
                a proteção dos direitos e o bem-estar de todas as partes envolvidas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-destaque hover:bg-destaque/90 text-claro">
                  <Link href="/contato" className="flex items-center gap-2">
                    <img src="/icons/icon-whatsapp.svg" alt="WhatsApp" className="w-5 h-5" width={20} height={20} loading="eager" />
                    <span className="uppercase">INICIAR ATENDIMENTO</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-claro text-claro hover:bg-claro hover:text-principal">
                  <Link 
                    href="#como-funciona"
                    className="transition-colors duration-200 hover:bg-[#29406a] hover:text-destaque focus-visible:ring-2 focus-visible:ring-destaque focus:outline-none"
                  >
                    Saiba Como Funciona
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Divórcio */}
        <section className="py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Tipos de Divórcio
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Cada situação é única. Conheça as diferentes modalidades e encontre a melhor opção para o seu caso.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-destaque/20 p-3 rounded-full">
                      <Handshake className="w-6 h-6 text-destaque" />
                    </div>
                    <h3 className="text-2xl font-bold text-principal">Divórcio Consensual</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Quando há acordo entre as partes sobre partilha de bens, guarda dos filhos e pensão alimentícia. 
                    Processo mais rápido e econômico.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Processo mais rápido (60 a 90 dias)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Custos reduzidos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Menos desgaste emocional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Pode ser feito em cartório (sem filhos menores)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-principal/20 p-3 rounded-full">
                      <Scale className="w-6 h-6 text-destaque" />
                    </div>
                    <h3 className="text-2xl font-bold text-principal">Divórcio Litigioso</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Quando não há acordo entre as partes. Necessita de processo judicial com defesa dos 
                    interesses de cada parte.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Defesa completa dos seus direitos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Análise detalhada de bens e patrimônio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Proteção dos interesses dos filhos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Busca por acordo durante o processo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="py-16 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-destaque mb-4">
                  Como Funciona o Processo
                </h2>
                <p className="text-lg text-claro max-w-2xl mx-auto">
                  Um passo a passo claro e transparente para que você saiba exatamente o que esperar.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <MessageCircle className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">1. Consultoria Inicial</h3>
                  <p className="text-principal">
                    Análise completa do seu caso, esclarecimento de dúvidas e definição da melhor estratégia jurídica.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <FileText className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">2. Documentação</h3>
                  <p className="text-principal">
                    Orientação sobre documentos necessários e preparação de toda a documentação legal do processo.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Scale className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">3. Execução Completa</h3>
                  <p className="text-principal">
                    Cuidamos de toda a parte técnica e burocrática do seu processo, garantindo agilidade e precisão em cada etapa.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Search className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">4. Acompanhamento</h3>
                  <p className="text-principal">
                    Atualizações constantes, suporte próximo e linguagem acessível até a solução final, com orientações pós-processo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Questões Importantes */}
        <section className="py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Questões Importantes no Divórcio
                </h2>
                <p className="text-lg text-gray-600">
                  Principais pontos que precisam ser definidos durante o processo de divórcio.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Partilha de Bens</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Divisão justa do patrimônio construído durante o casamento, considerando o regime de bens adotado.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Guarda dos Filhos</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Definição de guarda compartilhada ou unilateral, sempre priorizando o bem-estar das crianças.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Pensão Alimentícia</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Fixação de valor justo para pensão alimentícia dos filhos, baseada na capacidade financeira dos pais.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Direito de Visitas</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Regulamentação de horários e períodos de convivência entre pais e filhos após a separação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por Que Uma Advogada Especialista */}
        <section className="py-16 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-destaque mb-4">
                  Por Que a Presença de Uma Advogada Especialista Faz Toda a Diferença
                </h2>
                <p className="text-lg text-claro max-w-3xl mx-auto">
                  O divórcio é um momento delicado que envolve questões emocionais, patrimoniais e familiares complexas. 
                  Ter uma especialista ao seu lado garante proteção total dos seus direitos.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="bg-secundario rounded-2xl p-8 h-full flex flex-col justify-between">
                  <h3 className="text-2xl font-bold text-principal mb-4">
                    Experiência que Protege Seus Direitos
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Conhecimento Profundo:</strong>
                        <span className="text-principal ml-1">Domínio completo das leis de família e jurisprudências atualizadas</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Estratégia Personalizada:</strong>
                        <span className="text-principal ml-1">Cada caso é único e merece uma abordagem específica e cuidadosa</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Negociação Eficaz:</strong>
                        <span className="text-principal ml-1">Habilidade para buscar acordos justos e evitar desgastes desnecessários</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Proteção Patrimonial:</strong>
                        <span className="text-principal ml-1">Análise detalhada de bens para garantir partilha justa e legal</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Atendimento Humanizado:</strong>
                        <span className="text-principal ml-1">Comunicação clara e acessível com respeito às particularidades de cada cliente</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-destaque rounded-2xl p-8 h-full flex flex-col justify-between text-principal">
                  <h3 className="text-2xl font-bold mb-4 text-principal">Dra. Brennda: Sua Melhor Escolha</h3>
                  <p className="text-principal mb-6">
                    Especialista reconhecida em Direito de Família, com ampla experiência em casos de divórcio. 
                    Atendimento humanizado, ética profissional e resultados comprovados.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-principal rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-destaque" />
                      </div>
                      <span className="text-base text-principal">Acompanhamento personalizado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-principal rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-destaque" />
                      </div>
                      <span className="text-base text-principal">Linguagem clara e acessível</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-principal rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-destaque" />
                      </div>
                      <span className="text-base text-principal">Atuação estratégica com foco em resultados</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-principal rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-destaque" />
                      </div>
                      <span className="text-base text-principal">Comunicação constante e transparente</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild className="w-full bg-principal hover:bg-principal/90 text-claro text-base">
                      <Link 
                        href="/contato" 
                        className="flex items-center justify-center gap-2 text-claro text-base transition-colors duration-200 hover:bg-[#29406a] hover:text-claro focus-visible:ring-2 focus-visible:ring-destaque focus:outline-none"
                      >
                        <img src="/icons/icon-whatsapp.svg" alt="WhatsApp" className="w-5 h-5" width={20} height={20} loading="eager" />
                        Iniciar Atendimento
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                Precisa de Ajuda com Divórcio?
              </h2>
              <p className="text-xl text-principal mb-8 max-w-2xl mx-auto">
                Inicie seu atendimento personalizado e tire todas as suas dúvidas. 
                Atendimento humanizado e foco na melhor solução para o seu caso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-destaque hover:bg-destaque/90 text-claro">
                  <Link href="/contato" className="flex items-center gap-2">
                    <img src="/icons/icon-whatsapp.svg" alt="WhatsApp" className="w-6 h-6" width={24} height={24} loading="eager" />
                    <span className="uppercase">INICIAR ATENDIMENTO</span>
                  </Link>
                </Button>
                <Button size="lg" asChild className="bg-principal hover:bg-principal/90 text-claro">
                  <Link href="/areas-de-atuacao">
                    Ver Outros Serviços
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
}
