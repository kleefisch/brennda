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
  "guarda-compartilhada-direitos-pais": {
    id: 1,
    title: "Guarda Compartilhada: Como Funciona e Quais os Direitos dos Pais",
    excerpt: "Entenda tudo sobre a guarda compartilhada, seus benefícios para os filhos e como é estabelecida na prática jurídica.",
    category: "Direito de Família",
    author: "Dra. Brennda Silva",
    publishedAt: "2024-01-15",
    readTime: "12 min",
    views: 3247,
    likes: 127,
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=630&fit=crop&crop=center",
    imageAlt: "Família feliz representando a guarda compartilhada",
    content: `
      <p class="lead">A guarda compartilhada representa uma <strong>transformação significativa</strong> no direito de família brasileiro. Desde 2014, com a Lei nº 13.058, ela é considerada a modalidade preferencial nos tribunais nacionais. Mas quais são as implicações práticas dessa mudança para pais e filhos? Este artigo esclarece os aspectos fundamentais dessa modalidade que está redefinindo as relações familiares pós-separação.</p>
      <h3>Definição e Fundamentos Legais da Guarda Compartilhada</h3>
      <p>A guarda compartilhada caracteriza-se pelo exercício conjunto da autoridade parental por ambos os genitores, mesmo após a dissolução da união conjugal. Estabelecida pela Lei nº 13.058/2014, que alterou os artigos 1.583 e 1.584 do Código Civil, ela representa um marco na proteção dos direitos das crianças e adolescentes.</p>
      <p>Diferentemente da guarda unilateral, onde apenas um dos pais detém a responsabilidade sobre as decisões importantes da vida do filho, na guarda compartilhada ambos os genitores exercem conjuntamente o poder familiar, mantendo-se como protagonistas ativos na formação e desenvolvimento da criança.</p>
      <div class="highlight-box">
        <h4>Aspecto Importante da Legislação</h4>
        <p>A guarda compartilhada não implica necessariamente divisão igualitária do tempo de convivência. A criança pode ter uma residência de referência, mas as <strong>decisões fundamentais</strong> sobre sua vida devem ser tomadas conjuntamente pelos genitores.</p>
      </div>
      <h3>Características Essenciais da Guarda Compartilhada</h3>
      <h4>Responsabilidade Parental Compartilhada</h4>
      <p>Todas as decisões relevantes concernentes à educação, saúde, atividades extracurriculares e desenvolvimento geral da criança devem ser tomadas em conjunto pelos genitores. Esta característica elimina a possibilidade de decisões unilaterais que possam prejudicar o interesse do menor.</p>
      <h4>Distribuição Equilibrada da Convivência</h4>
      <p>O tempo de convivência deve ser distribuído de forma equilibrada entre os genitores, sempre considerando a rotina da criança, suas necessidades específicas e a disponibilidade dos pais para proporcionar cuidado adequado.</p>
      <h4>Flexibilidade Residencial</h4>
      <p>Embora a criança possa ter uma residência principal, é fundamental que tenha tempo significativo e de qualidade com ambos os genitores, priorizando sempre a manutenção dos vínculos afetivos.</p>
      <h4>Comunicação Efetiva Entre os Genitores</h4>
      <p>A manutenção de comunicação constante e respeitosa entre os pais é elemento essencial para o sucesso da guarda compartilhada, permitindo o alinhamento de decisões e estratégias educacionais.</p>
      <h4>Priorização do Bem-Estar Infantil</h4>
      <p>Todas as decisões devem ser orientadas pelo princípio do melhor interesse da criança, prevalecendo sempre sobre eventuais conflitos ou preferências pessoais dos genitores.</p>
      <h3>Benefícios Comprovados da Guarda Compartilhada</h3>
      <p>Estudos especializados em direito de família e psicologia infantil demonstram que crianças em regime de guarda compartilhada apresentam:</p>
      <ul class="benefits-list">
        <li><strong>Redução significativa</strong> de problemas comportamentais e emocionais</li>
        <li><strong>Desenvolvimento de autoestima</strong> mais sólida e relacionamentos interpessoais saudáveis</li>
        <li><strong>Melhores indicadores acadêmicos</strong> e maior engajamento escolar</li>
        <li><strong>Diminuição dos sentimentos</strong> de abandono e rejeição</li>
        <li><strong>Preservação integral dos vínculos afetivos</strong> com ambos os genitores</li>
      </ul>
      <div class="warning-box">
        <h4>Situações que Podem Impedir a Guarda Compartilhada</h4>
        <p>O magistrado pode indeferir a aplicação da guarda compartilhada quando verificadas as seguintes circunstâncias:</p>
        <ul>
          <li><strong>Violência doméstica</strong> devidamente comprovada nos autos</li>
          <li><strong>Dependência química</strong> não tratada de um dos genitores</li>
          <li><strong>Transtornos psiquiátricos graves</strong> sem acompanhamento médico adequado</li>
          <li><strong>Distância geográfica</strong> que inviabilize a convivência regular</li>
          <li><strong>Conflito irreconciliável</strong> entre os genitores que prejudique o menor</li>
        </ul>
      </div>
      <h3>Direitos e Deveres na Guarda Compartilhada</h3>
      <h4>Direitos dos Genitores</h4>
      <ul>
        <li>Participação ativa em todas as decisões importantes sobre a vida do filho</li>
        <li>Acesso irrestrito a informações médicas, escolares e de desenvolvimento</li>
        <li>Tempo de convivência regular e protegido juridicamente</li>
        <li>Direito de ser consultado sobre mudanças significativas na rotina da criança</li>
        <li>Possibilidade de contestar decisões consideradas prejudiciais ao menor</li>
      </ul>
      <h4>Deveres dos Genitores</h4>
      <ul>
        <li>Contribuição financeira proporcional para o sustento do filho</li>
        <li>Manutenção de comunicação respeitosa e colaborativa</li>
        <li>Respeito integral aos períodos de convivência do outro genitor</li>
        <li>Abstenção de práticas de alienação parental</li>
        <li>Participação ativa na educação e formação da criança</li>
      </ul>
      <h3>Procedimentos para Estabelecimento da Guarda Compartilhada</h3>
      <h4>Modalidade Consensual</h4>
      <p>Quando há acordo entre os genitores, o estabelecimento da guarda compartilhada pode ocorrer através de:</p>
      <ul>
        <li>Acordo extrajudicial homologado em cartório</li>
        <li>Homologação judicial em audiência de conciliação</li>
        <li>Mediação familiar com posterior homologação</li>
      </ul>
      <h4>Determinação Judicial</h4>
      <p>Na ausência de consenso, o magistrado pode determinar a guarda compartilhada com base no princípio do melhor interesse da criança, mesmo contra a vontade de um dos genitores, desde que tal modalidade se mostre benéfica ao menor.</p>
      <div class="tip-box">
        <h4>Questões Sobre Pensão Alimentícia</h4>
        <p>A guarda compartilhada não elimina a obrigação alimentar. A pensão é calculada considerando:</p>
        <ul>
          <li>Disparidade de renda entre os genitores</li>
          <li>Distribuição do tempo de permanência com cada genitor</li>
          <li>Gastos específicos de cada residência</li>
        </ul>
        <p>Normalmente, o genitor com maior capacidade econômica contribui com pensão para o de menor renda.</p>
      </div>
      <h3>Estratégias para Sucesso da Guarda Compartilhada</h3>
      <ol class="success-tips">
        <li><strong>Comunicação Eficiente:</strong> Utilize ferramentas tecnológicas para manter organização e transparência</li>
        <li><strong>Flexibilidade Necessária:</strong> Mantenha abertura para ajustes em situações imprevistas</li>
        <li><strong>Foco no Menor:</strong> Priorize sempre o bem-estar e desenvolvimento da criança</li>
        <li><strong>Organização Sistemática:</strong> Mantenha registros organizados de compromissos e decisões</li>
        <li><strong>Respeito Mútuo:</strong> Preserve o respeito profissional independente de questões pessoais</li>
        <li><strong>Transparência Financeira:</strong> Estabeleça critérios claros para divisão de gastos extraordinários</li>
        <li><strong>Acompanhamento Profissional:</strong> Considere orientação psicológica quando necessário</li>
      </ol>
      <h3>Considerações Finais</h3>
      <p>A guarda compartilhada representa um avanço significativo na legislação brasileira de direito de família, priorizando o desenvolvimento saudável das crianças através da manutenção de vínculos familiares sólidos. Embora possa apresentar desafios iniciais de adaptação, seus benefícios a longo prazo são amplamente reconhecidos pela jurisprudência e pela literatura especializada.</p>
      <p>A transição de um modelo familiar conjugal para uma estrutura de coparentalidade requer maturidade, comprometimento e, frequentemente, orientação profissional especializada para garantir que os interesses da criança permaneçam como prioridade absoluta.</p>
      <div class="cta-box">
        <h4>Orientação Jurídica Especializada</h4>
        <p>Cada situação familiar apresenta particularidades que exigem análise individualizada. A busca por orientação jurídica especializada em direito de família é fundamental para compreender os direitos e deveres específicos de cada caso, garantindo sempre a proteção dos interesses dos menores envolvidos.</p>
      </div>
    `,
    tags: ["Guarda Compartilhada", "Direito de Família", "Divórcio", "Filhos", "Pais"],
    relatedArticles: [
      {
        title: "Pensão Alimentícia: Valores, Revisão e Principais Dúvidas",
        slug: "pensao-alimenticia-valores-revisao",
        category: "Direito de Família"
      },
      {
        title: "Divórcio Consensual: Procedimento Simplificado em Cartório",
        slug: "divorcio-consensual-cartorio",
        category: "Direito de Família"
      }
    ]
      {
        title: "Guarda Compartilhada: Como Funciona e Quais os Direitos dos Pais",
        slug: "guarda-compartilhada-direitos-pais",
        category: "Direito de Família"
      }
    ]
  }
};
        <h4>Aspecto Importante da Legislação</h4>
        <p>A guarda compartilhada não implica necessariamente divisão igualitária do tempo de convivência. A criança pode ter uma residência de referência, mas as <strong>decisões fundamentais</strong> sobre sua vida devem ser tomadas conjuntamente pelos genitores.</p>
      </div>

      <h3>Características Essenciais da Guarda Compartilhada</h3>
      
      <h4>Responsabilidade Parental Compartilhada</h4>
      <p>Todas as decisões relevantes concernentes à educação, saúde, atividades extracurriculares e desenvolvimento geral da criança devem ser tomadas em conjunto pelos genitores. Esta característica elimina a possibilidade de decisões unilaterais que possam prejudicar o interesse do menor.</p>

      <h4>Distribuição Equilibrada da Convivência</h4>
      <p>O tempo de convivência deve ser distribuído de forma equilibrada entre os genitores, sempre considerando a rotina da criança, suas necessidades específicas e a disponibilidade dos pais para proporcionar cuidado adequado.</p>

      <h4>Flexibilidade Residencial</h4>
      <p>Embora a criança possa ter uma residência principal, é fundamental que tenha tempo significativo e de qualidade com ambos os genitores, priorizando sempre a manutenção dos vínculos afetivos.</p>

      <h4>Comunicação Efetiva Entre os Genitores</h4>
      <p>A manutenção de comunicação constante e respeitosa entre os pais é elemento essencial para o sucesso da guarda compartilhada, permitindo o alinhamento de decisões e estratégias educacionais.</p>

      <h4>Priorização do Bem-Estar Infantil</h4>
      <p>Todas as decisões devem ser orientadas pelo princípio do melhor interesse da criança, prevalecendo sempre sobre eventuais conflitos ou preferências pessoais dos genitores.</p>

      <h3>Benefícios Comprovados da Guarda Compartilhada</h3>
      <p>Estudos especializados em direito de família e psicologia infantil demonstram que crianças em regime de guarda compartilhada apresentam:</p>
      
      <ul class="benefits-list">
        <li><strong>Redução significativa</strong> de problemas comportamentais e emocionais</li>
        <li><strong>Desenvolvimento de autoestima</strong> mais sólida e relacionamentos interpessoais saudáveis</li>
        <li><strong>Melhores indicadores acadêmicos</strong> e maior engajamento escolar</li>
        <li><strong>Diminuição dos sentimentos</strong> de abandono e rejeição</li>
        <li><strong>Preservação integral dos vínculos afetivos</strong> com ambos os genitores</li>
      </ul>

      <div class="warning-box">
        <h4>Situações que Podem Impedir a Guarda Compartilhada</h4>
        <p>O magistrado pode indeferir a aplicação da guarda compartilhada quando verificadas as seguintes circunstâncias:</p>
        <ul>
          <li><strong>Violência doméstica</strong> devidamente comprovada nos autos</li>
          <li><strong>Dependência química</strong> não tratada de um dos genitores</li>
          <li><strong>Transtornos psiquiátricos graves</strong> sem acompanhamento médico adequado</li>
          <li><strong>Distância geográfica</strong> que inviabilize a convivência regular</li>
          <li><strong>Conflito irreconciliável</strong> entre os genitores que prejudique o menor</li>
        </ul>
      </div>

      <h3>Direitos e Deveres na Guarda Compartilhada</h3>
      
      <h4>Direitos dos Genitores</h4>
      <ul>
        <li>Participação ativa em todas as decisões importantes sobre a vida do filho</li>
        <li>Acesso irrestrito a informações médicas, escolares e de desenvolvimento</li>
        <li>Tempo de convivência regular e protegido juridicamente</li>
        <li>Direito de ser consultado sobre mudanças significativas na rotina da criança</li>
        <li>Possibilidade de contestar decisões consideradas prejudiciais ao menor</li>
      </ul>

      <h4>Deveres dos Genitores</h4>
      <ul>
        <li>Contribuição financeira proporcional para o sustento do filho</li>
        <li>Manutenção de comunicação respeitosa e colaborativa</li>
        <li>Respeito integral aos períodos de convivência do outro genitor</li>
        <li>Abstenção de práticas de alienação parental</li>
        <li>Participação ativa na educação e formação da criança</li>
      </ul>

      <h3>Procedimentos para Estabelecimento da Guarda Compartilhada</h3>
      
      <h4>Modalidade Consensual</h4>
      <p>Quando há acordo entre os genitores, o estabelecimento da guarda compartilhada pode ocorrer através de:</p>
      <ul>
        <li>Acordo extrajudicial homologado em cartório</li>
        <li>Homologação judicial em audiência de conciliação</li>
        <li>Mediação familiar com posterior homologação</li>
      </ul>

      <h4>Determinação Judicial</h4>
      <p>Na ausência de consenso, o magistrado pode determinar a guarda compartilhada com base no princípio do melhor interesse da criança, mesmo contra a vontade de um dos genitores, desde que tal modalidade se mostre benéfica ao menor.</p>

      <div class="tip-box">
        <h4>Questões Sobre Pensão Alimentícia</h4>
        <p>A guarda compartilhada não elimina a obrigação alimentar. A pensão é calculada considerando:</p>
        <ul>
          <li>Disparidade de renda entre os genitores</li>
          <li>Distribuição do tempo de permanência com cada genitor</li>
          <li>Gastos específicos de cada residência</li>
        </ul>
        <p>Normalmente, o genitor com maior capacidade econômica contribui com pensão para o de menor renda.</p>
      </div>

      <h3>Estratégias para Sucesso da Guarda Compartilhada</h3>
      
      <ol class="success-tips">
        <li><strong>Comunicação Eficiente:</strong> Utilize ferramentas tecnológicas para manter organização e transparência</li>
        <li><strong>Flexibilidade Necessária:</strong> Mantenha abertura para ajustes em situações imprevistas</li>
        <li><strong>Foco no Menor:</strong> Priorize sempre o bem-estar e desenvolvimento da criança</li>
        <li><strong>Organização Sistemática:</strong> Mantenha registros organizados de compromissos e decisões</li>
        <li><strong>Respeito Mútuo:</strong> Preserve o respeito profissional independente de questões pessoais</li>
        <li><strong>Transparência Financeira:</strong> Estabeleça critérios claros para divisão de gastos extraordinários</li>
        <li><strong>Acompanhamento Profissional:</strong> Considere orientação psicológica quando necessário</li>
      </ol>

      <h3>Considerações Finais</h3>
      <p>A guarda compartilhada representa um avanço significativo na legislação brasileira de direito de família, priorizando o desenvolvimento saudável das crianças através da manutenção de vínculos familiares sólidos. Embora possa apresentar desafios iniciais de adaptação, seus benefícios a longo prazo são amplamente reconhecidos pela jurisprudência e pela literatura especializada.</p>

      <p>A transição de um modelo familiar conjugal para uma estrutura de coparentalidade requer maturidade, comprometimento e, frequentemente, orientação profissional especializada para garantir que os interesses da criança permaneçam como prioridade absoluta.</p>

      <div class="cta-box">
        <h4>Orientação Jurídica Especializada</h4>
        <p>Cada situação familiar apresenta particularidades que exigem análise individualizada. A busca por orientação jurídica especializada em direito de família é fundamental para compreender os direitos e deveres específicos de cada caso, garantindo sempre a proteção dos interesses dos menores envolvidos.</p>
      </div>
    `,
    tags: ["Guarda Compartilhada", "Direito de Família", "Divórcio", "Filhos", "Pais"],
    relatedArticles: [
      {
        title: "Pensão Alimentícia: Valores, Revisão e Principais Dúvidas",
        slug: "pensao-alimenticia-valores-revisao",
        category: "Direito de Família"
      },
      {
        title: "Divórcio Consensual: Procedimento Simplificado em Cartório",
        slug: "divorcio-consensual-cartorio",
        category: "Direito de Família"
      }
    ]
  },
  "pensao-alimenticia-valores-revisao": {
    id: 2,
    title: "Pensão Alimentícia: Valores, Revisão e Principais Dúvidas",
    excerpt: "Saiba como é calculada a pensão alimentícia, quando pode ser revisada e quais são os direitos e deveres de cada parte.",
    category: "Direito de Família",
    author: "Dra. Brennda Silva",
    publishedAt: "2024-01-10",
    readTime: "10 min",
    views: 2892,
    likes: 167,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop&crop=center",
    imageAlt: "Calculadora e documentos representando cálculo de pensão alimentícia",
    content: `
      <p class="lead bg-gradient-to-r from-destaque/10 to-principal/5 rounded-lg px-8 py-6 mb-8 text-lg font-sans tracking-wide text-justify" style="font-family: 'Roboto', 'Lato', 'Open Sans', 'Georgia', serif; line-height: 1.7;">A pensão alimentícia configura-se como instituto de elevada relevância no âmbito do Direito de Família brasileiro. Fundamentada no <strong>trinômio necessidade-possibilidade-proporcionalidade</strong>, tem por finalidade assegurar a subsistência digna dos dependentes, em estrita observância aos parâmetros legais e jurisprudenciais. O presente artigo examina, sob perspectiva técnica e objetiva, os principais aspectos atinentes à fixação, revisão e extinção da obrigação alimentar.</p>

      <h2 class="subhead text-2xl font-bold text-principal mt-12 mb-6">1. Fundamentos Legais da Obrigação Alimentar</h2>
      <blockquote class="border-l-4 border-destaque pl-6 italic text-gray-700 bg-gray-50 py-4 mb-6">“Os alimentos devem ser fixados na proporção das necessidades do reclamante e dos recursos da pessoa obrigada.” <span class="text-sm">(Art. 1.694, §1º, Código Civil)</span></blockquote>
      <p class="mb-4 text-base font-sans text-justify" style="line-height:1.7;">A obrigação alimentar decorre do dever de solidariedade familiar, sendo disciplinada pelo Código Civil e pela Constituição Federal. O conceito de <em>alimentos</em> abrange não apenas a alimentação, mas todas as necessidades essenciais à manutenção da dignidade do alimentando.</p>
      <ul class="simple-list mb-8">
        <li><strong>Necessidade:</strong> Demonstração das necessidades do alimentando</li>
        <li><strong>Possibilidade:</strong> Capacidade financeira do alimentante</li>
        <li><strong>Proporcionalidade:</strong> Equilíbrio entre necessidade e possibilidade</li>
      </ul>
      <div class="highlight-box flex items-start gap-3 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl my-8">
        <span class="text-blue-500 text-2xl">ℹ️</span>
        <div>
          <h4 class="font-semibold text-blue-700 mb-1">Conceito Amplo de Alimentos</h4>
          <p class="text-base text-gray-700">Incluem moradia, vestuário, educação, saúde, lazer e demais elementos indispensáveis à vida digna, conforme o padrão social do alimentando.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">2. Sujeitos da Obrigação Alimentar</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 class="flex items-center gap-2 text-lg font-semibold text-principal mb-2"><span class="text-green-600">👶</span> Filhos Menores e Maiores</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Menores de 18 anos:</strong> Direito presumido e incondicional</li>
            <li><strong>Entre 18 e 24 anos:</strong> Condicionado à comprovação de estudos regulares ou necessidade</li>
            <li><strong>Maiores de 24 anos:</strong> Apenas em situações excepcionais devidamente comprovadas</li>
          </ul>
        </div>
        <div>
          <h3 class="flex items-center gap-2 text-lg font-semibold text-principal mb-2"><span class="text-yellow-600">🧑‍🤝‍🧑</span> Ex-Cônjuge ou Companheiro</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Situação comprovada de vulnerabilidade econômica</li>
            <li>Impossibilidade temporária ou permanente de autossustento</li>
            <li>Dedicação exclusiva às atividades domésticas durante a união</li>
          </ul>
          <h3 class="flex items-center gap-2 text-lg font-semibold text-principal mt-6 mb-2"><span class="text-purple-600">👴</span> Ascendentes</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Pais ou avós em situação de necessidade comprovada</li>
            <li>Descendentes com capacidade econômica para prestação de alimentos</li>
            <li>Baseado no princípio da reciprocidade das obrigações familiares</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">3. Metodologia de Cálculo da Pensão Alimentícia</h2>
      <div class="calculation-box bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 p-8 rounded-2xl my-10">
        <h4 class="font-semibold text-purple-700 mb-2">Percentual Orientativo</h4>
        <p class="mb-1"><strong>Entre 20% e 30% da renda líquida</strong> do alimentante, salvo peculiaridades do caso concreto.</p>
        <p class="text-sm text-gray-600"><em>Exemplo:</em> Renda líquida de R$ 5.000,00 = pensão entre R$ 1.000,00 e R$ 1.500,00</p>
      </div>
      <h3 class="text-xl font-semibold text-principal mt-8 mb-2">Critérios para Fixação</h3>
      <ul class="list-disc pl-5 space-y-2 mb-8">
        <li>Necessidades do alimentando (alimentação, educação, saúde, moradia, lazer)</li>
        <li>Capacidade econômica do alimentante (renda, patrimônio, despesas)</li>
        <li>Proporção de tempo de convivência</li>
        <li>Outras obrigações alimentares</li>
      </ul>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">4. Modalidades de Pensão Alimentícia</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 class="font-semibold text-principal mb-2">Pensão Provisória</h4>
          <p class="text-base mb-4">Fixada liminarmente para garantir a subsistência do alimentando durante o trâmite processual.</p>
          <h4 class="font-semibold text-principal mb-2">Pensão Definitiva</h4>
          <p class="text-base mb-4">Estabelecida por sentença após instrução probatória, podendo ser revista em caso de alteração da situação das partes.</p>
        </div>
        <div>
          <h4 class="font-semibold text-principal mb-2">Pensão Gravídica</h4>
          <p class="text-base mb-4">Destinada à gestante, cobre despesas da gravidez e converte-se automaticamente em pensão alimentícia após o nascimento.</p>
          <h4 class="font-semibold text-principal mb-2">Pensão por Morte</h4>
          <p class="text-base">Prestação devida em virtude de falecimento do alimentante, nos termos da legislação previdenciária ou sucessória.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">5. Revisão e Extinção da Obrigação Alimentar</h2>
      <div class="warning-box bg-amber-50 border-l-4 border-amber-500 p-6 rounded-xl my-8">
        <h4 class="font-semibold text-amber-700 mb-2">Revisão</h4>
        <p class="mb-2">A revisão da pensão alimentícia é admitida quando comprovada <strong>alteração significativa</strong> na situação financeira de qualquer das partes.</p>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Majoração: aumento da renda do alimentante, novas necessidades do alimentando, despesas extraordinárias.</li>
          <li>Redução: diminuição da capacidade financeira, nascimento de outros filhos, extinção de necessidades.</li>
        </ul>
      </div>
      <div class="danger-box bg-red-50 border-l-4 border-red-500 p-6 rounded-xl my-8">
        <h4 class="font-semibold text-red-700 mb-2">Extinção</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li>Maioridade civil e conclusão dos estudos</li>
          <li>Casamento ou união estável do alimentando</li>
          <li>Morte do alimentante ou alimentando</li>
          <li>Melhoria substancial da condição econômica do alimentando</li>
          <li>Ingratidão grave (art. 1.708, CC)</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">6. Consequências do Inadimplemento</h2>
      <div class="danger-box bg-red-50 border-l-4 border-red-500 p-6 rounded-xl my-8">
        <h4 class="font-semibold text-red-700 mb-2">Medidas Coercitivas</h4>
        <ol class="list-decimal pl-5 space-y-1">
          <li><strong>Prisão civil</strong> do devedor (até 3 meses)</li>
          <li>Protesto do débito em cartório</li>
          <li>Inscrição em órgãos de proteção ao crédito</li>
          <li>Penhora de bens e bloqueio de ativos</li>
          <li>Desconto em folha de pagamento</li>
        </ol>
      </div>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">7. Orientações Práticas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 class="font-semibold text-principal mb-2">Para o Alimentante</h4>
          <ul class="list-disc pl-5 space-y-2">
            <li>Manter registros de todos os pagamentos</li>
            <li>Utilizar transferências bancárias rastreáveis</li>
            <li>Comunicar formalmente alterações de renda</li>
            <li>Contratar seguro de vida para dependentes</li>
            <li>Revisar periodicamente o valor da pensão</li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-principal mb-2">Para o Alimentando</h4>
          <ul class="list-disc pl-5 space-y-2">
            <li>Organizar documentação de despesas</li>
            <li>Atualizar necessidades junto ao alimentante</li>
            <li>Comprovar situação acadêmica, se aplicável</li>
            <li>Utilizar os recursos exclusivamente para as finalidades devidas</li>
            <li>Monitorar a manutenção do poder aquisitivo</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">8. Considerações Finais</h2>
      <div class="final-cta bg-gradient-to-br from-principal/8 to-destaque/8 border-2 border-principal/30 p-8 rounded-2xl my-12">
        <h4 class="font-semibold text-principal mb-2">Assessoria Jurídica Especializada</h4>
        <p class="text-base">Cada situação familiar apresenta particularidades que demandam análise individualizada. Recomenda-se a consulta a profissional especializado em Direito de Família para adequada orientação e defesa dos interesses envolvidos.</p>
      </div>

      <h2 class="subhead text-2xl font-bold text-principal mt-12 mb-6">Fundamentos Legais da Obrigação Alimentar</h2>
      <blockquote class="border-l-4 border-destaque pl-6 italic text-gray-700 bg-gray-50 py-4 mb-6">“Os alimentos devem ser fixados na proporção das necessidades do reclamante e dos recursos da pessoa obrigada.” <span class="text-sm">(Art. 1.694, §1º, Código Civil)</span></blockquote>
      <p class="mb-4 text-base font-sans text-justify" style="line-height:1.7;">A pensão alimentícia encontra respaldo no Código Civil brasileiro, fundamentando-se no princípio da solidariedade familiar e no dever de mútua assistência entre parentes. O conceito de <em>alimentos</em> abrange todas as necessidades básicas para manutenção de uma vida digna.</p>
      <ul class="simple-list mb-8">
        <li><strong>Necessidade:</strong> Comprovação das necessidades básicas do alimentando</li>
        <li><strong>Possibilidade:</strong> Capacidade econômica do alimentante para prover sem prejuízo próprio</li>
        <li><strong>Proporcionalidade:</strong> Equilíbrio entre a necessidade e a possibilidade</li>
      </ul>
      <div class="highlight-box flex items-start gap-3 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl my-8">
        <span class="text-blue-500 text-2xl">ℹ️</span>
        <div>
          <h4 class="font-semibold text-blue-700 mb-1">Conceito Amplo de Alimentos</h4>
          <p class="text-base text-gray-700">O termo <em>alimentos</em> no direito de família abrange moradia, vestuário, educação, saúde, lazer e demais necessidades para manutenção do padrão de vida compatível com a condição social do alimentando.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">Quem tem direito à pensão alimentícia?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 class="flex items-center gap-2 text-lg font-semibold text-principal mb-2"><span class="text-green-600">👶</span> Filhos Menores e Maiores</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Menores de 18 anos:</strong> Direito presumido e incondicional</li>
            <li><strong>Entre 18 e 24 anos:</strong> Condicionado à comprovação de estudos regulares ou necessidade</li>
            <li><strong>Maiores de 24 anos:</strong> Apenas em situações excepcionais devidamente comprovadas</li>
          </ul>
        </div>
        <div>
          <h3 class="flex items-center gap-2 text-lg font-semibold text-principal mb-2"><span class="text-yellow-600">🧑‍🤝‍🧑</span> Ex-Cônjuge ou Companheiro</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Situação comprovada de vulnerabilidade econômica</li>
            <li>Impossibilidade temporária ou permanente de autossustento</li>
            <li>Dedicação exclusiva às atividades domésticas durante a união</li>
          </ul>
          <h3 class="flex items-center gap-2 text-lg font-semibold text-principal mt-6 mb-2"><span class="text-purple-600">👴</span> Ascendentes</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Pais ou avós em situação de necessidade comprovada</li>
            <li>Descendentes com capacidade econômica para prestação de alimentos</li>
            <li>Baseado no princípio da reciprocidade das obrigações familiares</li>
          </ul>
        </div>
      </div>

      <h4>Ex-Cônjuge ou Companheiro</h4>
      <ul>
        <li>Situação comprovada de vulnerabilidade econômica</li>
        <li>Impossibilidade temporária ou permanente de autossustento</li>
        <li>Dedicação exclusiva às atividades domésticas durante a união</li>
      </ul>

      <h4>Ascendentes</h4>
      <ul>
        <li>Pais ou avós em situação de necessidade comprovada</li>
        <li>Descendentes com capacidade econômica para prestação de alimentos</li>
        <li>Baseado no princípio da reciprocidade das obrigações familiares</li>
      </ul>

      <h3>Metodologia de Cálculo da Pensão Alimentícia</h3>
      
      <div class="calculation-box">
        <h4>Percentual Orientativo para Um Filho</h4>
        <p><strong>Entre 20% e 30% da renda líquida</strong> do alimentante</p>
        <p><em>Exemplo:</em> Renda líquida de R$ 5.000,00 = Pensão entre R$ 1.000,00 e R$ 1.500,00</p>
      </div>

      <h4>Fatores Considerados na Fixação</h4>
      
      <h5>Necessidades do Alimentando</h5>
      <ul>
        <li>Gastos com alimentação e nutrição adequada</li>
        <li>Despesas com vestuário e calçados</li>
        <li>Custos educacionais (mensalidades, material, transporte)</li>
        <li>Plano de saúde e despesas médicas</li>
        <li>Proporção dos gastos habitacionais</li>
        <li>Atividades de lazer e desenvolvimento</li>
      </ul>

      <h5>Capacidade Econômica do Alimentante</h5>
      <ul>
        <li>Renda mensal comprovada (salários, pró-labore, aposentadoria)</li>
        <li>Rendimentos variáveis (comissões, bonificações, décimo terceiro)</li>
        <li>Receitas de investimentos e aluguéis</li>
        <li>Patrimônio disponível</li>
        <li>Compromissos financeiros essenciais</li>
        <li>Outras obrigações alimentares existentes</li>
      </ul>

      <h3>Modalidades de Pensão Alimentícia</h3>
      
      <h4>Pensão Provisória</h4>
      <p>Concedida liminarmente no início do processo, baseada em evidências preliminares da necessidade e capacidade, visando evitar situação de penúria enquanto tramita a ação principal.</p>

      <h4>Pensão Definitiva</h4>
      <p>Estabelecida após completa instrução processual, com análise detalhada de todas as provas produzidas, constituindo obrigação permanente até que sobrevenham fatos modificativos.</p>

      <h4>Pensão Gravídica</h4>
      <p>Destinada à gestante, cobrindo despesas extraordinárias da gravidez, parto e puerpério, convertendo-se automaticamente em pensão alimentícia em favor do nascituro.</p>

      <h4>Pensão por Morte</h4>
      <p>Benefício previdenciário ou obrigação sucessória que mantém a prestação alimentar mesmo após o falecimento do alimentante.</p>

      <h3>Procedimentos de Revisão</h3>
      
      <div class="warning-box">
        <h4>Requisito Fundamental</h4>
        <p>A revisão da pensão alimentícia somente é admissível quando comprovada <strong>alteração significativa</strong> na situação econômica de qualquer das partes envolvidas.</p>
      </div>

      <h4>Hipóteses para Majoração</h4>
      <ul class="increase-list">
        <li>Aumento substancial da renda do alimentante</li>
        <li>Ingresso do alimentando em instituição de ensino privada</li>
        <li>Surgimento de gastos médicos especializados</li>
        <li>Impacto inflacionário não compensado</li>
        <li>Mudança para localidade com custo de vida superior</li>
      </ul>

      <h4>Hipóteses para Redução</h4>
      <ul class="decrease-list">
        <li>Redução comprovada da capacidade econômica do alimentante</li>
        <li>Nascimento de outros filhos</li>
        <li>Assunção de novas obrigações alimentares</li>
        <li>Aumento significativo das despesas pessoais essenciais</li>
        <li>Maioridade do alimentando sem continuidade dos estudos</li>
      </ul>

      <h3>Consequências do Inadimplemento</h3>
      
      <div class="danger-box">
        <h4>Medidas Coercitivas Aplicáveis</h4>
        <ol>
          <li><strong>Prisão Civil:</strong> Detenção de até 3 meses por dívida alimentar</li>
          <li><strong>Protesto Extrajudicial:</strong> Inclusão do débito em cartório de protesto</li>
          <li><strong>Negativação:</strong> Inscrição em órgãos de proteção ao crédito</li>
          <li><strong>Execução Patrimonial:</strong> Penhora de bens e direitos</li>
          <li><strong>Desconto em Folha:</strong> Retenção direta na fonte pagadora</li>
          <li><strong>Bloqueio de Ativos:</strong> Indisponibilidade de contas e veículos</li>
        </ol>
      </div>

      <h3>Causas de Extinção da Obrigação Alimentar</h3>
      
      <h4>Situações que Extinguem a Pensão</h4>
      <ul>
        <li>Conclusão dos estudos superiores com inserção no mercado de trabalho</li>
        <li>Casamento ou união estável do alimentando</li>
        <li>Morte do alimentante ou alimentando</li>
        <li>Melhoria substancial da condição econômica do alimentando</li>
        <li>Prática de ato de ingratidão por parte do alimentando</li>
        <li>Maioridade civil sem continuidade educacional</li>
      </ul>

      <h3>Orientações Práticas</h3>
      
      <h4>Para o Alimentante</h4>
      <ol class="tips-list">
        <li><strong>Manutenção de Registros:</strong> Conservar todos os comprovantes de pagamento</li>
        <li><strong>Modalidade de Pagamento:</strong> Utilizar sempre transferências bancárias rastreáveis</li>
        <li><strong>Comunicação de Alterações:</strong> Informar imediatamente mudanças na situação econômica</li>
        <li><strong>Seguro de Vida:</strong> Contratar apólice em favor dos dependentes</li>
        <li><strong>Revisão Periódica:</strong> Avaliar regularmente a adequação do valor</li>
      </ol>

      <h4>Para o Alimentando</h4>
      <ol class="tips-list">
        <li><strong>Comprovação de Gastos:</strong> Manter documentação organizada das despesas</li>
        <li><strong>Atualização de Necessidades:</strong> Comunicar formalmente aumentos de custos</li>
        <li><strong>Documentação Educacional:</strong> Comprovar regularmente a situação acadêmica</li>
        <li><strong>Uso Adequado:</strong> Aplicar os recursos exclusivamente para as finalidades devidas</li>
        <li><strong>Acompanhamento Inflacionário:</strong> Monitorar a manutenção do poder aquisitivo</li>
      </ol>

      <h3>Situações Controvertidas</h3>
      
      <h4>Desemprego do Alimentante</h4>
      <p>A obrigação alimentar persiste mesmo durante períodos de desemprego, sendo considerada a capacidade potencial de trabalho e a qualificação profissional do alimentante para determinação de valor compatível.</p>

      <h4>Renda Variável ou Informal</h4>
      <p>Para profissionais autônomos ou com renda irregular, a pensão pode ser fixada com base na média dos rendimentos ou através de percentual sobre a renda efetivamente auferida mensalmente.</p>

      <h4>Negativa de Visitas</h4>
      <p>O direito de visitas e a obrigação alimentar são independentes. A recusa em permitir o convívio não exonera o genitor do dever de prestar alimentos, sendo necessárias ações distintas para cada questão.</p>

      <h3>Considerações Finais</h3>
      
      <p>A pensão alimentícia, quando adequadamente compreendida e aplicada, constitui importante instrumento de proteção social e familiar. Sua fixação e revisão devem sempre observar o equilíbrio entre as necessidades legítimas do alimentando e a capacidade real do alimentante.</p>
      
      <ul class="conclusion-list">
        <li>O objetivo principal é garantir dignidade ao alimentando</li>
        <li>A justiça busca equilíbrio, não oneração excessiva</li>
        <li>O diálogo extrajudicial pode prevenir conflitos desnecessários</li>
        <li>A documentação adequada é fundamental para ambas as partes</li>
        <li>Situações podem evoluir, justificando revisões periódicas</li>
      </ul>

      <div class="final-cta">
        <h4>Assessoria Jurídica Especializada</h4>
        <p>Cada situação familiar apresenta características únicas que exigem análise jurídica individualizada. A orientação profissional especializada em direito de família é essencial para adequada compreensão dos direitos e deveres, evitando conflitos desnecessários e garantindo a proteção de todos os envolvidos.</p>
      </div>
    `,
    tags: ["Pensão Alimentícia", "Direito de Família", "Alimentos", "Revisão", "Filhos"],
    relatedArticles: [
      {
        title: "Guarda Compartilhada: Como Funciona e Quais os Direitos dos Pais",
        slug: "guarda-compartilhada-direitos-pais",
        category: "Direito de Família"
      }
    ]
  }
};

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articlesData[params.slug as keyof typeof articlesData];
  
  if (!article) {
    return {
      title: "Artigo não encontrado - Advocacia Brennda Silva",
    };
  }

  return {
    title: `${article.title} - Advocacia Brennda Silva`,
    description: article.excerpt,
    keywords: article.tags.join(", "),
  };
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}

function calculateReadTime(content: string): string {
  // Remove HTML tags and count words
  const textContent = content.replace(/<[^>]*>/g, '');
  const words = textContent.trim().split(/\s+/).length;
  
  // Average reading speed: 200 words per minute in Portuguese
  const wordsPerMinute = 200;
  const minutes = Math.ceil(words / wordsPerMinute);
  
  return `${minutes} min`;
}

export default function ArtigoPage({ params }: Props) {
  const article = articlesData[params.slug as keyof typeof articlesData];

  if (!article) {
    notFound();
  }

  // Calculate real reading time
  const realReadTime = calculateReadTime(article.content);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Breadcrumb */}
        <section className="py-4 bg-secundario border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-destaque">Início</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/artigos" className="hover:text-destaque">Artigos</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-principal font-medium">{article.title}</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/artigos"
                className="inline-flex items-center gap-2 text-destaque hover:text-destaque/80 mb-6 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar aos artigos
              </Link>

              <div className="mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  article.category === 'Direito de Família' ? 'bg-blue-100 text-blue-800' :
                  article.category === 'Direito Civil' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {article.category}
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-principal mb-4 leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{realReadTime} de leitura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <ViewCounter articleId={article.id.toString()} initialViews={article.views} />
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-700">Compartilhar:</span>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" className="p-2">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <LinkIcon className="w-4 h-4" />
                  </Button>
                  <LikeButton initialLikes={article.likes} articleId={article.id.toString()} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div
                className="prose max-w-none font-sans text-principal prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-10 prose-h2:text-3xl prose-h2:font-semibold prose-h2:mb-8 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-6 prose-h4:text-xl prose-h4:font-semibold prose-h4:mb-4 prose-p:text-base prose-p:mb-5 prose-p:leading-relaxed prose-p:text-justify prose-li:text-base prose-li:mb-3 prose-li:leading-relaxed prose-ul:mb-6 prose-ol:mb-8 prose-strong:text-principal prose-strong:font-semibold prose-table:text-base prose-table:mb-8 prose-table:border prose-table:border-gray-200 prose-th:font-semibold prose-th:bg-gray-50 prose-th:border prose-th:border-gray-200 prose-td:border prose-td:border-gray-200 prose-td:p-3 prose-blockquote:border-l-4 prose-blockquote:border-destaque prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700 [&_.lead]:text-xl [&_.lead]:mb-8 [&_.lead]:border-l-4 [&_.lead]:border-destaque [&_.lead]:pl-8 [&_.lead]:py-4 [&_.lead]:bg-gradient-to-r [&_.lead]:from-destaque/5 [&_.lead]:to-transparent [&_.lead]:rounded-r-lg [&_.highlight-box]:bg-blue-50 [&_.highlight-box]:border-l-4 [&_.highlight-box]:border-blue-500 [&_.highlight-box]:p-6 [&_.highlight-box]:rounded-r-xl [&_.highlight-box]:my-8 [&_.warning-box]:bg-amber-50 [&_.warning-box]:border-l-4 [&_.warning-box]:border-amber-500 [&_.warning-box]:p-6 [&_.warning-box]:rounded-r-xl [&_.warning-box]:my-8 [&_.danger-box]:bg-red-50 [&_.danger-box]:border-l-4 [&_.danger-box]:border-red-500 [&_.danger-box]:p-6 [&_.danger-box]:rounded-r-xl [&_.danger-box]:my-8 [&_.tip-box]:bg-emerald-50 [&_.tip-box]:border-l-4 [&_.tip-box]:border-emerald-500 [&_.tip-box]:p-6 [&_.tip-box]:rounded-r-xl [&_.tip-box]:my-8 [&_.calculation-box]:bg-gradient-to-br [&_.calculation-box]:from-purple-50 [&_.calculation-box]:to-indigo-50 [&_.calculation-box]:border-2 [&_.calculation-box]:border-purple-200 [&_.calculation-box]:p-8 [&_.calculation-box]:rounded-2xl [&_.calculation-box]:my-10 [&_.cta-box]:bg-gradient-to-br [&_.cta-box]:from-destaque/10 [&_.cta-box]:to-principal/10 [&_.cta-box]:border-2 [&_.cta-box]:border-destaque/30 [&_.cta-box]:p-8 [&_.cta-box]:rounded-2xl [&_.cta-box]:my-12 [&_.final-cta]:bg-gradient-to-br [&_.final-cta]:from-principal/8 [&_.final-cta]:to-destaque/8 [&_.final-cta]:border-2 [&_.final-cta]:border-principal/30 [&_.final-cta]:p-8 [&_.final-cta]:rounded-2xl [&_.final-cta]:my-12 [&_.simple-list]:space-y-4 [&_.simple-list_li]:bg-gray-50 [&_.simple-list_li]:p-4 [&_.simple-list_li]:rounded-lg [&_.simple-list_li]:border-l-4 [&_.simple-list_li]:border-destaque [&_.benefits-list]:space-y-4 [&_.benefits-list_li]:bg-green-50 [&_.benefits-list_li]:p-4 [&_.benefits-list_li]:rounded-lg [&_.benefits-list_li]:border-l-4 [&_.benefits-list_li]:border-green-500 [&_.increase-list]:space-y-3 [&_.increase-list_li]:bg-green-50 [&_.increase-list_li]:p-3 [&_.increase-list_li]:rounded-lg [&_.increase-list_li]:border-l-4 [&_.increase-list_li]:border-green-500 [&_.decrease-list]:space-y-3 [&_.decrease-list_li]:bg-red-50 [&_.decrease-list_li]:p-3 [&_.decrease-list_li]:rounded-lg [&_.decrease-list_li]:border-l-4 [&_.decrease-list_li]:border-red-500 [&_.tips-list]:space-y-4 [&_.tips-list_li]:bg-blue-50 [&_.tips-list_li]:p-4 [&_.tips-list_li]:rounded-lg [&_.tips-list_li]:border-l-4 [&_.tips-list_li]:border-blue-500 [&_.success-tips]:space-y-5 [&_.success-tips_li]:bg-gradient-to-r [&_.success-tips_li]:from-yellow-50 [&_.success-tips_li]:to-orange-50 [&_.success-tips_li]:p-5 [&_.success-tips_li]:rounded-xl [&_.success-tips_li]:border-l-4 [&_.success-tips_li]:border-yellow-500 [&_.conclusion-list]:space-y-4 [&_.conclusion-list_li]:bg-gradient-to-r [&_.conclusion-list_li]:from-destaque/10 [&_.conclusion-list_li]:to-principal/10 [&_.conclusion-list_li]:p-4 [&_.conclusion-list_li]:rounded-lg [&_.conclusion-list_li]:border-l-4 [&_.conclusion-list_li]:border-destaque"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-principal mb-4">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secundario text-principal rounded-full text-sm hover:bg-destaque/10 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-secundario">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-destaque/20 to-principal/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-10 h-10 text-destaque" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-principal mb-2">Dra. Brennda Silva</h3>
                    <p className="text-gray-600 mb-4">
                      Advogada especialista em Direito de Família, Civil e Consumidor. Com mais de 10 anos de experiência, 
                      dedica-se a oferecer orientação jurídica clara e acessível, sempre priorizando o melhor interesse de seus clientes.
                    </p>
                    <Button asChild className="bg-destaque hover:bg-destaque/90 text-white">
                      <Link href="/contato">
                        Agendar Consulta
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {article.relatedArticles.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-principal mb-8">Artigos Relacionados</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {article.relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/artigos/${related.slug}`}
                      className="group bg-secundario rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-destaque/30"
                    >
                      <div className="mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          related.category === 'Direito de Família' ? 'bg-blue-100 text-blue-800' :
                          related.category === 'Direito Civil' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {related.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-principal group-hover:text-destaque transition-colors">
                        {related.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-principal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-claro mb-4">
                Precisa de Orientação Jurídica?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Se você tem dúvidas sobre seu caso específico, agende uma consulta gratuita com nossa advogada especialista.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-destaque hover:bg-destaque/90 text-white">
                  <Link href="/contato" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Agendar Consulta Gratuita
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-claro text-claro hover:bg-claro hover:text-principal">
                  <Link href="/artigos">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Ver Todos os Artigos
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

// Dados dos artigos
const articlesData = {
  "guarda-compartilhada-direitos-pais": {
    id: 1,
    title: "Guarda Compartilhada: Como Funciona e Quais os Direitos dos Pais",
    excerpt: "Entenda tudo sobre a guarda compartilhada, seus benefícios para os filhos e como é estabelecida na prática jurídica.",
    category: "Direito de Família",
    author: "Dra. Brennda Silva",
    publishedAt: "2024-01-15",
    readTime: "12 min",
    views: 3247,
    likes: 127,
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=630&fit=crop&crop=center",
    imageAlt: "Família feliz representando a guarda compartilhada",
    content: `
      <p class="lead">A guarda compartilhada representa uma <strong>transformação significativa</strong> no direito de família brasileiro. Desde 2014, com a Lei nº 13.058, ela é considerada a modalidade preferencial nos tribunais nacionais. Mas quais são as implicações práticas dessa mudança para pais e filhos? Este artigo esclarece os aspectos fundamentais dessa modalidade que está redefinindo as relações familiares pós-separação.</p>

      <h3>Definição e Fundamentos Legais da Guarda Compartilhada</h3>
      <p>A guarda compartilhada caracteriza-se pelo exercício conjunto da autoridade parental por ambos os genitores, mesmo após a dissolução da união conjugal. Estabelecida pela Lei nº 13.058/2014, que alterou os artigos 1.583 e 1.584 do Código Civil, ela representa um marco na proteção dos direitos das crianças e adolescentes.</p>

      <p>Diferentemente da guarda unilateral, onde apenas um dos pais detém a responsabilidade sobre as decisões importantes da vida do filho, na guarda compartilhada ambos os genitores exercem conjuntamente o poder familiar, mantendo-se como protagonistas ativos na formação e desenvolvimento da criança.</p>

      <div class="highlight-box">
        <h4>Princípio do Melhor Interesse da Criança</h4>
        <p>A Lei nº 13.058/2014 estabelece que a guarda compartilhada deve ser aplicada sempre que possível, priorizando o bem-estar e desenvolvimento saudável dos filhos através da manutenção de vínculos afetivos com ambos os genitores.</p>
      </div>

      <h3>Características Essenciais da Guarda Compartilhada</h3>
      
      <h4>Responsabilidade Parental Compartilhada</h4>
      <p>Todas as decisões relevantes concernentes à educação, saúde, atividades extracurriculares e desenvolvimento geral da criança devem ser tomadas em conjunto pelos genitores. Esta característica elimina a possibilidade de decisões unilaterais que possam prejudicar o interesse do menor.</p>

      <h4>Distribuição Equilibrada da Convivência</h4>
      <p>O tempo de convivência deve ser distribuído de forma equilibrada entre os genitores, sempre considerando a rotina da criança, suas necessidades específicas e a disponibilidade dos pais para proporcionar cuidado adequado.</p>

      <h4>Flexibilidade Residencial</h4>
      <p>Embora a criança possa ter uma residência principal, é fundamental que tenha tempo significativo e de qualidade com ambos os genitores, priorizando sempre a manutenção dos vínculos afetivos.</p>

      <h4>Comunicação Efetiva Entre os Genitores</h4>
      <p>A manutenção de comunicação constante e respeitosa entre os pais é elemento essencial para o sucesso da guarda compartilhada, permitindo o alinhamento de decisões e estratégias educacionais.</p>

      <h4>Priorização do Bem-Estar Infantil</h4>
      <p>Todas as decisões devem ser orientadas pelo princípio do melhor interesse da criança, prevalecendo sempre sobre eventuais conflitos ou preferências pessoais dos genitores.</p>

      <h3>Benefícios Comprovados da Guarda Compartilhada</h3>
      <p>Estudos especializados em direito de família e psicologia infantil demonstram que crianças em regime de guarda compartilhada apresentam:</p>
      
      <ul class="benefits-list">
        <li>Maior estabilidade emocional e melhor adaptação à separação dos pais</li>
        <li>Desenvolvimento de habilidades sociais mais consistentes</li>
        <li>Menor incidência de problemas comportamentais e acadêmicos</li>
        <li>Manutenção de vínculos afetivos sólidos com ambos os genitores</li>
        <li>Melhor compreensão da estrutura familiar pós-separação</li>
      </ul>

      <div class="warning-box">
        <h4>Situações que Podem Impedir a Guarda Compartilhada</h4>
        <p>O magistrado pode indeferir a aplicação da guarda compartilhada quando verificadas as seguintes circunstâncias:</p>
        <ul>
          <li>Histórico de violência doméstica ou abuso</li>
          <li>Distância geográfica significativa entre as residências dos genitores</li>
          <li>Incompatibilidade extrema entre os pais que prejudique o bem-estar da criança</li>
          <li>Indisponibilidade de um dos genitores para exercer adequadamente os cuidados parentais</li>
          <li>Uso de substâncias entorpecentes ou alcoolismo por parte de um dos genitores</li>
        </ul>
      </div>

      <h3>Direitos e Deveres na Guarda Compartilhada</h3>
      
      <h4>Direitos dos Genitores</h4>
      <ul>
        <li>Participação ativa em todas as decisões importantes sobre a vida do filho</li>
        <li>Acesso irrestrito a informações médicas, escolares e de desenvolvimento</li>
        <li>Tempo de convivência regular e protegido juridicamente</li>
        <li>Direito de ser consultado sobre mudanças significativas na rotina da criança</li>
        <li>Possibilidade de contestar decisões consideradas prejudiciais ao menor</li>
      </ul>

      <h4>Deveres dos Genitores</h4>
      <ul>
        <li>Contribuição financeira proporcional para o sustento do filho</li>
        <li>Manutenção de comunicação respeitosa e colaborativa</li>
        <li>Respeito integral aos períodos de convivência do outro genitor</li>
        <li>Abstenção de práticas de alienação parental</li>
        <li>Participação ativa na educação e formação da criança</li>
      </ul>

      <h3>Procedimentos para Estabelecimento da Guarda Compartilhada</h3>
      
      <h4>Modalidade Consensual</h4>
      <p>Quando há acordo entre os genitores, o estabelecimento da guarda compartilhada pode ocorrer através de:</p>
      <ul>
        <li>Acordo extrajudicial homologado em cartório</li>
        <li>Homologação judicial em audiência de conciliação</li>
        <li>Mediação familiar com posterior homologação</li>
      </ul>

      <h4>Determinação Judicial</h4>
      <p>Na ausência de consenso, o magistrado pode determinar a guarda compartilhada com base no princípio do melhor interesse da criança, mesmo contra a vontade de um dos genitores, desde que tal modalidade se mostre benéfica ao menor.</p>

      <div class="tip-box">
        <h4>Questões Sobre Pensão Alimentícia</h4>
        <p>A guarda compartilhada não elimina a obrigação alimentar. A pensão é calculada considerando:</p>
        <ul>
          <li>Renda de ambos os genitores</li>
          <li>Tempo de convivência com cada genitor</li>
          <li>Divisão proporcional das despesas</li>
        </ul>
        <p>Normalmente, o genitor com maior capacidade econômica contribui com pensão para o de menor renda.</p>
      </div>

      <h3>Estratégias para Sucesso da Guarda Compartilhada</h3>
      
      <ol class="success-tips">
        <li><strong>Estabeleça cronograma estruturado:</strong> Utilize ferramentas tecnológicas para manter organização e transparência</li>
        <li><strong>Mantenha flexibilidade responsável:</strong> Mantenha abertura para ajustes em situações imprevistas</li>
        <li><strong>Priorize sempre a criança:</strong> Priorize sempre o bem-estar e desenvolvimento da criança</li>
        <li><strong>Documentação adequada:</strong> Mantenha registros organizados de compromissos e decisões</li>
        <li><strong>Comunicação profissional:</strong> Preserve o respeito profissional independente de questões pessoais</li>
        <li><strong>Transparência financeira:</strong> Estabeleça critérios claros para divisão de gastos extraordinários</li>
        <li><strong>Apoio especializado:</strong> Considere orientação psicológica quando necessário</li>
      </ol>

      <h3>Considerações Finais</h3>
      <p>A guarda compartilhada representa um avanço significativo na legislação brasileira de direito de família, priorizando o desenvolvimento saudável das crianças através da manutenção de vínculos familiares sólidos. Embora possa apresentar desafios iniciais de adaptação, seus benefícios a longo prazo são amplamente reconhecidos pela jurisprudência e pela literatura especializada.</p>

      <p>A transição de um modelo familiar conjugal para uma estrutura de coparentalidade requer maturidade, comprometimento e, frequentemente, orientação profissional especializada para garantir que os interesses da criança permaneçam como prioridade absoluta.</p>

      <div class="cta-box">
        <h4>Orientação Jurídica Especializada</h4>
        <p>Cada situação familiar apresenta particularidades que exigem análise individualizada. A busca por orientação jurídica especializada em direito de família é fundamental para compreender os direitos e deveres específicos de cada caso, garantindo sempre a proteção dos interesses dos menores envolvidos.</p>
      </div>
    `,
    tags: ["Guarda Compartilhada", "Direito de Família", "Divórcio", "Filhos", "Pais"],
    relatedArticles: [
      {
        title: "Pensão Alimentícia: Valores, Revisão e Principais Dúvidas",
        slug: "pensao-alimenticia-valores-revisao",
        category: "Direito de Família"
      },
      {
        title: "Divórcio Consensual: Procedimento Simplificado em Cartório",
        slug: "divorcio-consensual-cartorio",
        category: "Direito de Família"
      }
    ]
  },
  "pensao-alimenticia-valores-revisao": {
    id: 2,
    title: "Pensão Alimentícia: Valores, Revisão e Principais Dúvidas",
    excerpt: "Saiba como é calculada a pensão alimentícia, quando pode ser revisada e quais são os direitos e deveres de cada parte.",
    category: "Direito de Família",
    author: "Dra. Brennda Silva",
    publishedAt: "2024-01-10",
    readTime: "10 min",
    views: 2892,
    likes: 167,
    image: "https://images.unsulash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop&crop=center",
    imageAlt: "Calculadora e documentos representando cálculo de pensão alimentícia",
    content: `
      <p class="lead bg-gradient-to-r from-destaque/10 to-principal/5 rounded-lg px-8 py-6 mb-8 text-lg font-sans tracking-wide text-justify" style="font-family: 'Roboto', 'Lato', 'Open Sans', 'Georgia', serif; line-height: 1.7;">A pensão alimentícia configura-se como instituto de elevada relevância no âmbito do Direito de Família brasileiro. Fundamentada no <strong>trinômio necessidade-possibilidade-proporcionalidade</strong>, tem por finalidade assegurar a subsistência digna dos dependentes, em estrita observância aos parâmetros legais e jurisprudenciais. O presente artigo examina, sob perspectiva técnica e objetiva, os principais aspectos atinentes à fixação, revisão e extinção da obrigação alimentar.</p>

      <h2 class="subhead text-2xl font-bold text-principal mt-12 mb-6">1. Fundamentos Legais da Obrigação Alimentar</h2>
      <blockquote class="border-l-4 border-destaque pl-6 italic text-gray-700 bg-gray-50 py-4 mb-6">"Os alimentos devem ser fixados na proporção das necessidades do reclamante e dos recursos da pessoa obrigada." <span class="text-sm">(Art. 1.694, §1º, Código Civil)</span></blockquote>
      <p class="mb-4 text-base font-sans text-justify" style="line-height:1.7;">A obrigação alimentar decorre do dever de solidariedade familiar, sendo disciplinada pelo Código Civil e pela Constituição Federal. O conceito de <em>alimentos</em> abrange não apenas a alimentação, mas todas as necessidades essenciais à manutenção da dignidade do alimentando.</p>
      <ul class="simple-list mb-8">
        <li><strong>Necessidade:</strong> Demonstração das necessidades do alimentando</li>
        <li><strong>Possibilidade:</strong> Capacidade financeira do alimentante</li>
        <li><strong>Proporcionalidade:</strong> Equilíbrio entre necessidade e possibilidade</li>
      </ul>
      <div class="highlight-box flex items-start gap-3 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl my-8">
        <span class="text-blue-500 text-2xl">ℹ️</span>
        <div>
          <h4 class="font-semibold text-blue-700 mb-1">Conceito Amplo de Alimentos</h4>
          <p class="text-base text-gray-700">Incluem moradia, vestuário, educação, saúde, lazer e demais elementos indispensáveis à vida digna, conforme o padrão social do alimentando.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">2. Sujeitos da Obrigação Alimentar</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 class="flex items-center gap-2 text-lg font-semibold text-principal mb-2"><span class="text-green-600">👶</span> Filhos Menores e Maiores</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Menores de idade:</strong> Direito presumido e incondicional</li>
            <li><strong>Maiores até 24 anos:</strong> Condicionado à comprovação de estudos regulares ou necessidade</li>
            <li><strong>Maiores de 24 anos:</strong> Apenas em situações excepcionais devidamente comprovadas</li>
          </ul>
        </div>
        <div>
          <h3 class="flex items-center gap-2 text-lg font-semibold text-principal mb-2"><span class="text-yellow-600">🧑‍🤝‍🧑</span> Ex-Cônjuge ou Companheiro</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Situação comprovada de vulnerabilidade econômica</li>
            <li>Impossibilidade temporária ou permanente de autossustento</li>
            <li>Dedicação exclusiva às atividades domésticas durante a união</li>
          </ul>
          <h3 class="flex items-center gap-2 text-lg font-semibold text-principal mt-6 mb-2"><span class="text-purple-600">👴</span> Ascendentes</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Pais ou avós em situação de necessidade comprovada</li>
            <li>Descendentes com capacidade econômica para prestação de alimentos</li>
            <li>Baseado no princípio da reciprocidade das obrigações familiares</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">3. Metodologia de Cálculo da Pensão Alimentícia</h2>
      <div class="calculation-box bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 p-8 rounded-2xl my-10">
        <h4 class="font-semibold text-purple-700 mb-2">Percentual Orientativo</h4>
        <p class="mb-1"><strong>Entre 20% e 30% da renda líquida</strong> do alimentante, salvo peculiaridades do caso concreto.</p>
        <p class="text-sm text-gray-600"><em>Exemplo:</em> Renda líquida de R$ 5.000,00 = pensão entre R$ 1.000,00 e R$ 1.500,00</p>
      </div>
      <h3 class="text-xl font-semibold text-principal mt-8 mb-2">Critérios para Fixação</h3>
      <ul class="list-disc pl-5 space-y-2 mb-8">
        <li>Necessidades do alimentando (alimentação, educação, saúde, moradia, lazer)</li>
        <li>Capacidade econômica do alimentante (renda, patrimônio, despesas)</li>
        <li>Proporção de tempo de convivência</li>
        <li>Outras obrigações alimentares</li>
      </ul>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">4. Modalidades de Pensão Alimentícia</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 class="font-semibold text-principal mb-2">Pensão Provisória</h4>
          <p class="text-base mb-4">Fixada liminarmente para garantir a subsistência do alimentando durante o trâmite processual.</p>
          <h4 class="font-semibold text-principal mb-2">Pensão Definitiva</h4>
          <p class="text-base mb-4">Estabelecida por sentença após instrução probatória, podendo ser revista em caso de alteração da situação das partes.</p>
        </div>
        <div>
          <h4 class="font-semibold text-principal mb-2">Pensão Gravídica</h4>
          <p class="text-base mb-4">Destinada à gestante, cobre despesas da gravidez e converte-se automaticamente em pensão alimentícia após o nascimento.</p>
          <h4 class="font-semibold text-principal mb-2">Pensão por Morte</h4>
          <p class="text-base">Prestação devida em virtude de falecimento do alimentante, nos termos da legislação previdenciária ou sucessória.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">5. Revisão e Extinção da Obrigação Alimentar</h2>
      <div class="warning-box bg-amber-50 border-l-4 border-amber-500 p-6 rounded-xl my-8">
        <h4 class="font-semibold text-amber-700 mb-2">Revisão</h4>
        <p class="mb-2">A revisão da pensão alimentícia é admitida quando comprovada <strong>alteração significativa</strong> na situação financeira de qualquer das partes.</p>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Majoração: aumento da renda do alimentante, novas necessidades do alimentando, despesas extraordinárias.</li>
          <li>Redução: diminuição da capacidade financeira, nascimento de outros filhos, extinção de necessidades.</li>
        </ul>
      </div>
      <div class="danger-box bg-red-50 border-l-4 border-red-500 p-6 rounded-xl my-8">
        <h4 class="font-semibold text-red-700 mb-2">Extinção</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li>Maioridade civil e conclusão dos estudos</li>
          <li>Casamento ou união estável do alimentando</li>
          <li>Morte do alimentante ou alimentando</li>
          <li>Melhoria substancial da condição econômica do alimentando</li>
          <li>Ingratidão grave (art. 1.708, CC)</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">6. Consequências do Inadimplemento</h2>
      <div class="danger-box bg-red-50 border-l-4 border-red-500 p-6 rounded-xl my-8">
        <h4 class="font-semibold text-red-700 mb-2">Medidas Coercitivas</h4>
        <ol class="list-decimal pl-5 space-y-1">
          <li><strong>Prisão civil</strong> do devedor (até 3 meses)</li>
          <li>Protesto do débito em cartório</li>
          <li>Inscrição em órgãos de proteção ao crédito</li>
          <li>Penhora de bens e bloqueio de ativos</li>
          <li>Desconto em folha de pagamento</li>
        </ol>
      </div>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">7. Orientações Práticas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 class="font-semibold text-principal mb-2">Para o Alimentante</h4>
          <ul class="list-disc pl-5 space-y-2">
            <li>Manter registros de todos os pagamentos</li>
            <li>Utilizar transferências bancárias rastreáveis</li>
            <li>Comunicar formalmente alterações de renda</li>
            <li>Contratar seguro de vida para dependentes</li>
            <li>Revisar periodicamente o valor da pensão</li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-principal mb-2">Para o Alimentando</h4>
          <ul class="list-disc pl-5 space-y-2">
            <li>Organizar documentação de despesas</li>
            <li>Atualizar necessidades junto ao alimentante</li>
            <li>Comprovar situação acadêmica, se aplicável</li>
            <li>Utilizar os recursos exclusivamente para as finalidades devidas</li>
            <li>Monitorar a manutenção do poder aquisitivo</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-principal mt-12 mb-6">8. Considerações Finais</h2>
      <div class="final-cta bg-gradient-to-br from-principal/8 to-destaque/8 border-2 border-principal/30 p-8 rounded-2xl my-12">
        <h4 class="font-semibold text-principal mb-2">Assessoria Jurídica Especializada</h4>
        <p class="text-base">Cada situação familiar apresenta particularidades que demandam análise individualizada. Recomenda-se a consulta a profissional especializado em Direito de Família para adequada orientação e defesa dos interesses envolvidos.</p>
      </div>
    `,
    tags: ["Pensão Alimentícia", "Direito de Família", "Alimentos", "Revisão", "Filhos"],
    relatedArticles: [
      {
        title: "Guarda Compartilhada: Como Funciona e Quais os Direitos dos Pais",
        slug: "guarda-compartilhada-direitos-pais",
        category: "Direito de Família"
      }
    ]
  }
};
