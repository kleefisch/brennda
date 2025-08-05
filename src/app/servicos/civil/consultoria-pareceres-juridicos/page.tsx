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
  title: "Consultoria e Pareceres Jurídicos - Advocacia Brennda Silva | Direito Civil",
  description: "Consultoria jurídica especializada e emissão de pareceres técnicos em Direito Civil. Segurança, clareza e respaldo para decisões e negócios.",
  keywords: "consultoria jurídica, parecer jurídico, direito civil, advogada, Brennda Silva, análise contratual, orientação legal",
};

export default function ConsultoriaPareceresJuridicosPage() {
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
                Consultoria e Pareceres Jurídicos
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Orientação técnica e emissão de pareceres para decisões seguras, prevenção de litígios e respaldo em negócios civis.
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

        {/* Modalidades de Consultoria */}
        <section className="py-16 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Modalidades de Consultoria e Pareceres
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Soluções sob medida para pessoas físicas e jurídicas em diversas situações do Direito Civil.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Consultoria Preventiva</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Análise de riscos, revisão de contratos e orientação para evitar litígios e prejuízos.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Prevenção de conflitos e segurança jurídica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Apoio em negociações e decisões estratégicas</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="text-2xl font-bold text-principal">Pareceres Técnicos</h3>
                  </div>
                  <p className="text-principal mb-6">
                    Elaboração de pareceres fundamentados para respaldo em processos, contratos e tomadas de decisão.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Opinião técnica clara e fundamentada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-destaque flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Validade jurídica e respaldo em decisões</span>
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
                  Como Funciona o Atendimento
                </h2>
                <p className="text-lg text-claro max-w-2xl mx-auto">
                  Processo transparente, ágil e personalizado para cada cliente.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <MessageCircle className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">1. Consulta Inicial</h3>
                  <p className="text-principal">
                    Entendimento da demanda, análise de documentos e definição da melhor estratégia.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <FileText className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">2. Análise Técnica</h3>
                  <p className="text-principal">
                    Estudo detalhado do caso, legislação aplicável e elaboração de parecer ou orientação.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Scale className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">3. Entrega do Parecer/Orientação</h3>
                  <p className="text-principal">
                    Apresentação do parecer ou consultoria, com esclarecimento de dúvidas e recomendações.
                  </p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-destaque/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-destaque/50 shadow-md">
                    <Users className="w-8 h-8 text-destaque" />
                  </div>
                  <h3 className="text-xl font-bold text-principal mb-3">4. Acompanhamento</h3>
                  <p className="text-principal">
                    Suporte contínuo para implementação das recomendações e esclarecimento de novas dúvidas.
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
                  Questões Importantes sobre Consultoria e Pareceres
                </h2>
                <p className="text-lg text-gray-600">
                  Pontos essenciais para garantir segurança e assertividade nas decisões civis.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Quando buscar uma consultoria jurídica?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Sempre que houver dúvidas sobre contratos, direitos, obrigações ou riscos em negócios civis.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">O parecer jurídico tem valor em juízo?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Sim, o parecer pode fundamentar decisões, negociações e servir como prova em processos judiciais.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">A consultoria é personalizada?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Sim, cada caso é analisado individualmente, com soluções sob medida para o cliente.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-destaque" />
                    <h3 className="font-bold text-principal">Há acompanhamento após o parecer?</h3>
                  </div>
                  <p className="text-principal text-sm flex-1">
                    Sim, o suporte pode ser contínuo para implementação das recomendações e novas dúvidas.
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
                  Por Que Contar com uma Advogada Especialista em Direito Civil
                </h2>
                <p className="text-lg text-claro max-w-3xl mx-auto">
                  Consultoria e pareceres exigem conhecimento técnico, atualização constante e visão estratégica para garantir segurança e resultados.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="bg-secundario rounded-2xl p-8 h-full flex flex-col justify-between">
                  <h3 className="text-2xl font-bold text-principal mb-4">
                    Experiência e Segurança para Suas Decisões
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Especialização:</strong>
                        <span className="text-principal ml-1">Atuação focada em Direito Civil e consultoria estratégica</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Atualização Constante:</strong>
                        <span className="text-principal ml-1">Acompanhamento das mudanças legislativas e jurisprudenciais</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Visão Estratégica:</strong>
                        <span className="text-principal ml-1">Soluções personalizadas para cada situação</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-destaque flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-destaque">Atendimento Humanizado:</strong>
                        <span className="text-principal ml-1">Clareza, empatia e proximidade em todas as etapas</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-destaque rounded-2xl p-8 h-full flex flex-col justify-between text-principal">
                  <h3 className="text-2xl font-bold mb-4 text-principal">Dra. Brennda: Referência em Consultoria Civil</h3>
                  <p className="text-principal mb-6">
                    Advogada especialista em Direito Civil, com experiência em consultoria, pareceres e soluções jurídicas para pessoas e empresas.
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
                      <span className="text-base text-principal">Foco em resultados e prevenção de litígios</span>
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
                Precisa de Consultoria ou Parecer Jurídico?
              </h2>
              <p className="text-xl text-principal mb-8 max-w-2xl mx-auto">
                Conte com orientação técnica, ágil e segura para tomar decisões e proteger seus interesses.
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
