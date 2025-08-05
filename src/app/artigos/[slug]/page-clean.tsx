import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Construction, ArrowLeft } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Artigos - Em Construção - Advocacia Brennda Silva",
    description: "Nossa seção de artigos está em construção. Em breve você terá acesso a conteúdos jurídicos especializados.",
  };
}

export default function ArtigoPage({ params }: Props) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-secundario">
        {/* Breadcrumb */}
        <section className="py-4 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-destaque">Início</Link>
                <span>/</span>
                <Link href="/artigos" className="hover:text-destaque">Artigos</Link>
                <span>/</span>
                <span className="text-principal font-medium">Em Construção</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Construction Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <Link
                href="/artigos"
                className="inline-flex items-center gap-2 text-destaque hover:text-destaque/80 mb-8 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar aos artigos
              </Link>

              <div className="mb-8">
                <Construction className="w-24 h-24 text-destaque mx-auto mb-6" />
                <h1 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
                  Artigo em Construção
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Estamos trabalhando para trazer conteúdos jurídicos de qualidade para você. 
                  Em breve, este artigo estará disponível com informações completas e atualizadas.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
                <h3 className="text-xl font-bold text-principal mb-4">
                  Enquanto isso, que tal agendar uma consulta?
                </h3>
                <p className="text-gray-600 mb-6">
                  Se você tem dúvidas jurídicas específicas, nossa advogada especialista pode ajudá-lo 
                  com orientação personalizada para seu caso.
                </p>
                <Button size="lg" asChild className="bg-destaque hover:bg-destaque/90 text-white">
                  <Link href="/contato">
                    Agendar Consulta Gratuita
                  </Link>
                </Button>
              </div>

              <div className="text-center">
                <Button variant="outline" asChild>
                  <Link href="/">
                    Voltar ao Início
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
