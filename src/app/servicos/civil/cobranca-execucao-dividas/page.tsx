import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Scale,
  FileText,
  CheckCircle,
  MessageCircle,
  Users
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cobrança e Execução de Dívidas - Advocacia Brennda Silva | Direito Civil",
  description: "Atuação especializada em cobrança e execução de dívidas: recuperação de crédito, negociação, ações judiciais e defesa dos interesses do credor.",
  keywords: "cobrança de dívidas, execução de dívidas, direito civil, advogada, Brennda Silva, recuperação de crédito, negociação, ações judiciais",
};

export default function CobrancaExecucaoDividasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-destaque/20 text-destaque px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Scale className="w-4 h-4" />
                Direito Civil
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-claro mb-6">
                Cobrança e Execução de Dívidas
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Recuperação de crédito, negociação e ações judiciais para garantir o recebimento de valores devidos.
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

        {/* Modalidades de Cobrança e Execução */}
        <section className="py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Modalidades de Cobrança e Execução
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Soluções para recuperação de crédito e defesa dos interesses do credor.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Cobrança Extrajudicial</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Negociação direta com o devedor, envio de notificações e acordos para recebimento rápido e eficiente.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Redução de custos e agilidade na recuperação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Acordos personalizados conforme o caso</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Execução Judicial</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Propositura de ação judicial para penhora de bens, bloqueio de valores e recebimento forçado da dívida.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Ações eficazes para garantir o pagamento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Acompanhamento em todas as fases do processo</span>
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
                  Como Funciona a Cobrança e Execução de Dívidas
                </h2>
                <p className="text-lg text-claro max-w-2xl mx-auto">
                  Passo a passo para recuperar créditos e garantir o recebimento dos valores devidos.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <MessageCircle className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">1. Consulta Inicial</h3>
                  <p className="text-principal">
                    Análise do caso, levantamento de documentos e definição da melhor estratégia de cobrança.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <FileText className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">2. Cobrança Extrajudicial</h3>
                  <p className="text-principal">
                    Negociação direta, envio de notificações e busca de acordo para pagamento voluntário.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Scale className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">3. Execução Judicial</h3>
                  <p className="text-principal">
                    Propositura de ação judicial para penhora, bloqueio de bens e recebimento forçado.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Users className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">4. Recebimento do Crédito</h3>
                  <p className="text-principal">
                    Acompanhamento até o recebimento do valor devido e suporte em eventuais dúvidas posteriores.
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
                  Questões Importantes sobre Cobrança e Execução de Dívidas
                </h2>
                <p className="text-lg text-gray-600">
                  Pontos essenciais para garantir seus direitos e aumentar as chances de êxito na recuperação de crédito.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Quais dívidas podem ser cobradas?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Dívidas decorrentes de contratos, cheques, notas promissórias, aluguéis, serviços e outros títulos.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Qual o prazo para cobrar uma dívida?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    O prazo varia conforme o tipo de dívida, mas é importante buscar orientação o quanto antes.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">É possível negociar antes de acionar a Justiça?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Sim, a negociação extrajudicial é recomendada e pode evitar custos e desgastes.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Preciso de advogada para cobrar ou executar?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Sim, a atuação de profissional especializado é fundamental para garantir seus direitos e aumentar as chances de êxito.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advogada Especialista */}
        <section className="py-16 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-destaque mb-4">
                  Por Que Contar com uma Advogada Especialista em Cobrança e Execução
                </h2>
                <p className="text-lg text-claro max-w-3xl mx-auto">
                  Casos de cobrança e execução exigem conhecimento técnico, estratégia e experiência para garantir o recebimento do crédito.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="bg-secundario rounded-2xl p-8 h-full flex flex-col justify-between">
                  <h3 className="text-2xl font-bold text-principal mb-4">
                    Experiência e Segurança para Recuperar seu Crédito
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Especialização:</strong>
                        <span className="text-principal ml-1">Atuação focada em cobrança, execução e recuperação de crédito</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Estratégia Personalizada:</strong>
                        <span className="text-principal ml-1">Cada caso é analisado de forma única para maximizar resultados</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Negociação e Defesa:</strong>
                        <span className="text-principal ml-1">Busca de acordos justos e defesa firme em juízo</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Atendimento Humanizado:</strong>
                        <span className="text-principal ml-1">Empatia, clareza e proximidade em todas as etapas</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-destaque rounded-2xl p-8 h-full flex flex-col justify-between text-principal">
                  <h3 className="text-2xl font-bold mb-4 text-principal">Dra. Brennda: Referência em Cobrança e Execução</h3>
                  <p className="text-principal mb-6">
                    Advogada especialista em Direito Civil, com experiência em cobrança, execução e recuperação de crédito para pessoas e empresas.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-principal rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-destaque" />
                      </div>
                      <span className="text-base text-principal">Atendimento personalizado e ágil</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-principal rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-destaque" />
                      </div>
                      <span className="text-base text-principal">Clareza e objetividade nas orientações</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-principal rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-destaque" />
                      </div>
                      <span className="text-base text-principal">Foco em resultados e defesa dos direitos do credor</span>
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
                Precisa de Ajuda com Cobrança ou Execução de Dívidas?
              </h2>
              <p className="text-xl text-principal mb-8 max-w-2xl mx-auto">
                Conte com orientação especializada para recuperar créditos e garantir seus direitos.
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
