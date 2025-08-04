import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Como posso agendar uma consulta?",
    answer: "Você pode agendar uma consulta através do nosso formulário de contato, WhatsApp ou ligando diretamente para o escritório. Oferecemos também consultas online por videoconferência para sua comodidade."
  },
  {
    question: "Qual o valor da consulta inicial?",
    answer: "A primeira consulta é gratuita e tem duração de até 30 minutos. Neste encontro, analisamos seu caso, esclarecemos suas dúvidas e apresentamos as possíveis estratégias jurídicas."
  },
  {
    question: "Em quais áreas do direito vocês atuam?",
    answer: "Atuamos principalmente em Direito de Família e Sucessões, Direito Civil, Contratos e Direito do Consumidor. Também oferecemos serviços de mediação e arbitragem para resolução de conflitos."
  },
  {
    question: "Como funciona o pagamento dos honorários?",
    answer: "Os honorários são definidos de acordo com a complexidade do caso. Oferecemos diferentes modalidades de pagamento: valor fixo, percentual sobre o resultado ou pagamento parcelado. Tudo é transparente e acordado previamente."
  },
  {
    question: "Vocês atendem em outras cidades?",
    answer: "Nosso escritório está localizado em São Paulo, mas atendemos clientes de todo o Brasil através de consultas online e, quando necessário, nos deslocamos para outras cidades para audiências e reuniões importantes."
  },
  {
    question: "Quanto tempo demora para resolver um processo?",
    answer: "O tempo varia conforme a complexidade do caso e a área do direito envolvida. Processos administrativos podem levar alguns meses, enquanto ações judiciais podem durar de 1 a 3 anos. Sempre mantemos nossos clientes informados sobre o andamento."
  },
  {
    question: "Posso acompanhar meu processo online?",
    answer: "Sim! Mantemos nossos clientes sempre informados através de atualizações por e-mail, WhatsApp e acesso ao sistema de acompanhamento processual. Você receberá relatórios regulares sobre o andamento do seu caso."
  },
  {
    question: "Vocês oferecem acordo extrajudicial?",
    answer: "Sempre que possível, buscamos resolver conflitos através de mediação e acordos extrajudiciais, que são mais rápidos, econômicos e preservam o relacionamento entre as partes. Temos alta taxa de sucesso nessas negociações."
  },
  {
    question: "Qual a diferença entre mediação e processo judicial?",
    answer: "A mediação é um processo mais rápido, econômico e colaborativo, onde as partes chegam a um acordo com auxílio de um mediador neutro. O processo judicial é mais formal, demorado e pode gerar um resultado imposto pelo juiz."
  },
  {
    question: "Como posso saber se meu caso tem chances de sucesso?",
    answer: "Durante a consulta inicial, analisamos detalhadamente seu caso, a documentação disponível e o cenário jurídico. Com base em nossa experiência, fornecemos uma avaliação realista das chances de sucesso e das estratégias mais adequadas."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-principal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-claro mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços jurídicos. 
            Se sua pergunta não estiver aqui, entre em contato conosco.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border border-gray-200 hover:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 hover:text-destaque transition-colors">
                  <span className="font-semibold text-destaque pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 bg-claro/10 backdrop-blur-sm rounded-xl border border-destaque/20 max-w-4xl mx-auto px-0 pt-8 pb-8">
          <h3 className="text-xl font-semibold text-claro mb-2">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-200 mb-4">
            Entre em contato conosco para uma consulta gratuita e personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group bg-destaque hover:bg-destaque/90 text-claro border-0 px-4 py-6 text-lg font-semibold min-w-0">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <img src="/icons/icon-whatsapp.svg" alt="WhatsApp" className="w-7 h-7" width={28} height={28} loading="eager" />
                <span className="uppercase">Fale agora com a advogada</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
