import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import Link from "next/link";
import {
  Handshake,
  Users,
  FileText,
  Scale,
  Calendar,
  CheckCircle,
  MessageCircle,
  Search
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guarda de Filhos - Advocacia Brennda Silva | Especialista em Direito de Família",
  description: "Atuação especializada em guarda de filhos: guarda compartilhada, unilateral, regulamentação de visitas e proteção do melhor interesse da criança.",
  keywords: "guarda de filhos, guarda compartilhada, guarda unilateral, direito de família, advogada, Brennda Silva, regulamentação de visitas",
};

export default function GuardaDeFilhosPage() {
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
                Guarda de Filhos
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Proteção, cuidado e o melhor interesse da criança em processos de guarda, regulamentação de visitas e convivência familiar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsappButton size="lg" className="bg-destaque hover:bg-destaque/90 text-claro">
                  <span className="uppercase">INICIAR ATENDIMENTO</span>
                </WhatsappButton>
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

        {/* Tipos de Guarda */}
        <section className="py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Tipos de Guarda
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Entenda as modalidades de guarda e como cada uma protege o bem-estar da criança.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Guarda Compartilhada</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Responsabilidade conjunta dos pais, promovendo o convívio equilibrado e decisões compartilhadas sobre a vida do filho.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Prioriza o melhor interesse da criança</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Decisões importantes tomadas em conjunto</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Guarda Unilateral</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Atribuída a apenas um dos pais ou responsável, quando o outro não tem condições de exercer o poder familiar.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Proteção em situações de risco ou ausência</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Direito de visitas garantido ao outro genitor</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona o Processo (SEMPRE igual) */}
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
                  Questões Importantes sobre Guarda de Filhos
                </h2>
                <p className="text-lg text-gray-600">
                  Pontos essenciais que precisam ser definidos e esclarecidos em processos de guarda.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Quem pode pedir a guarda?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Pais, mães, avós ou responsáveis legais podem solicitar a guarda, sempre visando o melhor interesse da criança.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Como é definida a guarda?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    A guarda é definida pelo juiz, considerando o vínculo afetivo, a rotina da criança e a capacidade dos pais.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">E a visitação?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    O direito de visitas é garantido ao genitor que não detém a guarda, promovendo o convívio saudável com a criança.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">O que é o melhor interesse?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Todas as decisões devem priorizar o bem-estar físico, emocional e social da criança ou adolescente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por Que a Presença de Uma Advogada Especialista Faz Toda a Diferença (SEMPRE igual) */}
        <section className="py-16 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-destaque mb-4">
                  Por Que a Presença de Uma Advogada Especialista Faz Toda a Diferença
                </h2>
                <p className="text-lg text-claro max-w-3xl mx-auto">
                  A guarda de filhos exige sensibilidade, conhecimento técnico e experiência para proteger o melhor interesse da criança e garantir segurança jurídica para toda a família.
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
                        <span className="text-principal ml-1">Especialização em Direito de Família e atualização constante</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Estratégia Personalizada:</strong>
                        <span className="text-principal ml-1">Cada caso é analisado de forma única, buscando a melhor solução</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Negociação Eficaz:</strong>
                        <span className="text-principal ml-1">Busca de acordos justos e defesa firme em processos judiciais</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Proteção dos Direitos:</strong>
                        <span className="text-principal ml-1">Garantia de que os direitos de quem depende e de quem paga sejam respeitados</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Atendimento Humanizado:</strong>
                        <span className="text-principal ml-1">Atenção, empatia e clareza em todas as etapas do processo</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-destaque rounded-2xl p-8 h-full flex flex-col justify-between text-principal">
                  <h3 className="text-2xl font-bold mb-4 text-principal">Dra. Brennda: Sua Melhor Escolha</h3>
                  <p className="text-principal mb-6">
                    Advogada especialista em Direito de Família, com ampla experiência, atendimento humanizado, ética profissional e resultados comprovados.
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
                    <WhatsappButton className="w-full bg-principal hover:bg-principal/90 text-claro text-base">
                      Iniciar Atendimento
                    </WhatsappButton>
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
                Precisa de Ajuda com Guarda de Filhos?
              </h2>
              <p className="text-xl text-principal mb-8 max-w-2xl mx-auto">
                Conte com orientação especializada e acolhedora para garantir o melhor para seu filho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsappButton size="lg" className="bg-destaque hover:bg-destaque/90 text-claro">
                  <span className="uppercase">INICIAR ATENDIMENTO</span>
                </WhatsappButton>
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

        {/* Tipos de Guarda */}
        <section className="py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Tipos de Guarda
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Entenda as modalidades de guarda e como cada uma protege o bem-estar da criança.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Guarda Compartilhada</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Responsabilidade conjunta dos pais, promovendo o convívio equilibrado e decisões compartilhadas sobre a vida do filho.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Prioriza o melhor interesse da criança</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Decisões importantes tomadas em conjunto</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Guarda Unilateral</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Atribuída a apenas um dos pais ou responsável, quando o outro não tem condições de exercer o poder familiar.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Proteção em situações de risco ou ausência</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Direito de visitas garantido ao outro genitor</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona o Processo (SEMPRE igual) */}
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
                  Questões Importantes sobre Guarda de Filhos
                </h2>
                <p className="text-lg text-gray-600">
                  Pontos essenciais que precisam ser definidos e esclarecidos em processos de guarda.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Quem pode pedir a guarda?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Pais, mães, avós ou responsáveis legais podem solicitar a guarda, sempre visando o melhor interesse da criança.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Como é definida a guarda?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    A guarda é definida pelo juiz, considerando o vínculo afetivo, a rotina da criança e a capacidade dos pais.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">E a visitação?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    O direito de visitas é garantido ao genitor que não detém a guarda, promovendo o convívio saudável com a criança.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">O que é o melhor interesse?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Todas as decisões devem priorizar o bem-estar físico, emocional e social da criança ou adolescente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por Que a Presença de Uma Advogada Especialista Faz Toda a Diferença (SEMPRE igual) */}
        <section className="py-16 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-destaque mb-4">
                  Por Que a Presença de Uma Advogada Especialista Faz Toda a Diferença
                </h2>
                <p className="text-lg text-claro max-w-3xl mx-auto">
                  A pensão alimentícia envolve direitos fundamentais e exige conhecimento técnico para garantir justiça e segurança para todos os envolvidos.
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
                        <span className="text-principal ml-1">Especialização em Direito de Família e atualização constante</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Estratégia Personalizada:</strong>
                        <span className="text-principal ml-1">Cada caso é analisado de forma única, buscando a melhor solução</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Negociação Eficaz:</strong>
                        <span className="text-principal ml-1">Busca de acordos justos e defesa firme em processos judiciais</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Proteção dos Direitos:</strong>
                        <span className="text-principal ml-1">Garantia de que os direitos de quem depende e de quem paga sejam respeitados</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Atendimento Humanizado:</strong>
                        <span className="text-principal ml-1">Atenção, empatia e clareza em todas as etapas do processo</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-destaque rounded-2xl p-8 h-full flex flex-col justify-between text-principal">
                  <h3 className="text-2xl font-bold mb-4 text-principal">Dra. Brennda: Sua Melhor Escolha</h3>
                  <p className="text-principal mb-6">
                    Advogada dedicada ao Direito de Família, com atuação ética, técnica e acolhedora em demandas de alimentos.
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
                    <WhatsappButton className="w-full bg-principal hover:bg-principal/90 text-claro text-base">
                      Iniciar Atendimento
                    </WhatsappButton>
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
                Precisa de Ajuda com Guarda de Filhos?
              </h2>
              <p className="text-xl text-principal mb-8 max-w-2xl mx-auto">
                Conte com orientação especializada e acolhedora para garantir o melhor para seu filho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsappButton size="lg" className="bg-destaque hover:bg-destaque/90 text-claro">
                  <span className="uppercase">INICIAR ATENDIMENTO</span>
                </WhatsappButton>
                <Button size="lg" asChild className="bg-principal hover:bg-principal/90 text-claro">
                  <Link href="/areas-de-atuacao">
                    Ver Outros Serviços
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
