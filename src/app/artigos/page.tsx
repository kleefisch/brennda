import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Construction, ArrowLeft, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Artigos - Em Construção - Advocacia Brennda Silva",
  description: "Nossa seção de artigos está em construção. Em breve você terá acesso a conteúdos jurídicos especializados sobre Direito de Família, Civil e do Consumidor.",
  keywords: "artigos jurídicos, direito de família, direito civil, direito do consumidor, advocacia, Brennda Silva",
};

export default function ArtigosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-secundario">
        {/* Breadcrumb */}
        <section className="py-4 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-destaque">Início</Link>
                <span>/</span>
                <span className="text-principal font-medium">Artigos</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Construction Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-destaque hover:text-destaque/80 mb-8 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao início
              </Link>

              <div className="mb-12">
                <Construction className="w-32 h-32 text-destaque mx-auto mb-8" />
                <h1 className="text-4xl lg:text-5xl font-bold text-principal mb-6">
                  Artigos em Construção
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Estamos desenvolvendo uma biblioteca completa de artigos jurídicos especializados. 
                  Em breve, você terá acesso a conteúdos sobre <strong>Direito de Família</strong>, 
                  <strong>Direito Civil</strong> e <strong>Direito do Consumidor</strong> com 
                  linguagem clara e orientações práticas.
                </p>
              </div>

              {/* Coming Soon Features */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h3 className="text-lg font-bold text-principal mb-2">Direito de Família</h3>
                  <p className="text-gray-600 text-sm">
                    Guarda compartilhada, pensão alimentícia, divórcio, inventário e sucessões
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h3 className="text-lg font-bold text-principal mb-2">Direito Civil</h3>
                  <p className="text-gray-600 text-sm">
                    Contratos, responsabilidade civil, ações indenizatórias e direito imobiliário
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-lg font-bold text-principal mb-2">Direito do Consumidor</h3>
                  <p className="text-gray-600 text-sm">
                    Defesa do consumidor, cobranças indevidas, vícios de produto e serviços
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-principal mb-4">
                  Precisa de Orientação Jurídica Agora?
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Não espere pelos artigos! Se você tem uma questão jurídica específica, 
                  nossa advogada especialista pode ajudá-lo com orientação personalizada e imediata.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-destaque hover:bg-destaque/90 text-white">
                    <Link href="/contato" className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Agendar Consulta Gratuita
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/areas-de-atuacao">
                      Ver Áreas de Atuação
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-principal/10 to-destaque/10 rounded-2xl p-8 border border-principal/20">
                <h3 className="text-xl font-bold text-principal mb-4">
                  Seja o Primeiro a Saber
                </h3>
                <p className="text-gray-600 mb-6">
                  Cadastre-se para receber uma notificação quando nossos artigos estiverem disponíveis.
                </p>
                <Button asChild className="bg-principal hover:bg-principal/90 text-white">
                  <Link href="/contato">
                    Cadastrar Interesse
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
