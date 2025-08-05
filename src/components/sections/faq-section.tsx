"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Como iniciar um processo de divórcio?",
    answer: "Para dar entrada no divórcio, é preciso definir se ele será consensual (amigável) ou litigioso (quando há conflito). O consensual pode ser feito em cartório se não houver filhos menores, enquanto o litigioso sempre corre na justiça. A presença de uma advogada é obrigatória em todos os casos para garantir que seus direitos na partilha de bens e questões relacionadas aos filhos sejam respeitados, buscando a solução mais rápida e justa."
  },
  {
    question: "Como é definida a pensão alimentícia para os filhos? É possível revisar o valor ou solicitar o fim da pensão?",
    answer: "A pensão é calculada com base no equilíbrio entre a necessidade financeira do filho e a possibilidade de quem paga. Sim, o valor pode ser revisto judicialmente a qualquer momento através de uma ação revisional, caso haja mudança na situação financeira de uma das partes. O fim da pensão também exige uma ação judicial para comprovar que o filho não precisa mais do auxílio. Uma advogada é essencial para conduzir esses processos e garantir um resultado justo."
  },
  {
    question: "Comprei um produto ou contratei um serviço e tive problemas. Quais são meus direitos como consumidor e como devo proceder?",
    answer: "O Código de Defesa do Consumidor assegura o direito ao conserto, à troca do produto ou à devolução do dinheiro se o problema não for resolvido no prazo legal. Se o contato com a empresa não surtir efeito, o próximo passo é a via judicial. Uma advogada é crucial para formalizar a reclamação e buscar, além da solução do problema, uma possível indenização por danos morais."
  },
  {
    question: "Fui negativado indevidamente ou meu nome está no SPC/Serasa sem que eu saiba a causa. O que fazer?",
    answer: "A negativação indevida por uma dívida desconhecida ou já paga é ilegal e gera o direito a uma indenização por dano moral. O primeiro passo é buscar a empresa credora para esclarecimentos, mas a ação mais eficaz é a judicial. Uma advogada pode conseguir uma liminar para retirar seu nome dos cadastros de proteção ao crédito rapidamente e garantir sua compensação pelo transtorno."
  },
  {
    question: "Comprei um imóvel na planta e me arrependi. Posso desistir?",
    answer: "Sim, é possível desistir da compra de um imóvel na planta através do distrato. No entanto, a construtora tem o direito de reter uma parte do valor pago como multa. A lei impõe limites a essa retenção para evitar cobranças abusivas. A assessoria de uma advogada é vital para negociar a devolução do maior percentual possível do valor investido, protegendo seus direitos."
  },
  {
    question: "Um parente faleceu. Como funciona a partilha da herança?",
    answer: "A partilha é realizada através do inventário, que formaliza a transferência dos bens aos herdeiros e pode ser feito na justiça ou em cartório (se todos forem maiores e concordes). A presença de uma advogada é obrigatória em todos os casos para garantir que seus direitos na partilha de bens e questões relacionadas aos filhos sejam respeitados, buscando a solução mais rápida e justa."
  },
  {
    question: "Sofri um dano material ou moral por ação de outra pessoa. Tenho direito a indenização?",
    answer: "Sim, o Código Civil determina que quem causa dano a outra pessoa tem o dever de indenizá-la. Essa reparação abrange tanto os danos materiais (prejuízos financeiros) quanto os danos morais (sofrimento, ofensa à honra). Para garantir esse direito, é preciso comprovar a culpa, o dano e a relação entre eles. Uma advogada é fundamental para analisar o caso, reunir as provas e buscar na justiça a reparação integral dos prejuízos."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

        {/* FAQ Custom Design */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <h3 className="font-semibold text-principal pr-4 group-hover:text-destaque transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destaque/10 flex items-center justify-center group-hover:bg-destaque/20 transition-colors">
                  <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                    {openIndex === index ? (
                      <Minus className="h-4 w-4 text-destaque" />
                    ) : (
                      <Plus className="h-4 w-4 text-destaque" />
                    )}
                  </div>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 border-t border-gray-100">
                  <div className="pt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
