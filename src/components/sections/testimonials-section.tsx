import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Empresária",
    company: "Santos & Associados",
    content: "A Dra. Brennda conduziu meu processo de divórcio com muita competência e sensibilidade. Sempre me manteve informada sobre cada etapa e conseguiu um resultado muito favorável. Recomendo sem hesitação!",
    rating: 5
  },
  {
    name: "João Silva",
    role: "Engenheiro",
    company: "Construtora Silva",
    content: "Excelente profissional! Me ajudou em uma questão contratual complexa e resolveu tudo de forma rápida e eficiente. O atendimento é impecável e os honorários justos.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Médica",
    company: "Clínica Costa",
    content: "Precisei de ajuda com direito do consumidor e a Dra. Brennda foi fundamental para resolver meu problema. Muito profissional, dedicada e sempre disponível para esclarecer dúvidas.",
    rating: 5
  },
  {
    name: "Carlos Oliveira",
    role: "Aposentado",
    company: "",
    content: "A doutora me auxiliou em um processo de inventário muito complicado. Sua experiência e conhecimento fizeram toda a diferença. Conseguimos resolver tudo de forma tranquila e rápida.",
    rating: 5
  },
  {
    name: "Lucia Ferreira",
    role: "Comerciante",
    company: "Loja Ferreira",
    content: "Atendimento excepcional! A Dra. Brennda é muito atenciosa e explica tudo de forma clara. Me ajudou em uma questão trabalhista e o resultado foi excelente.",
    rating: 5
  },
  {
    name: "Roberto Mendes",
    role: "Professor",
    company: "Colégio Mendes",
    content: "Profissional extremamente competente e ética. Me representou em um caso de direito civil e sua dedicação foi impressionante. Recomendo a todos que precisam de um advogado de confiança.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja alguns depoimentos de quem confiou em nosso trabalho.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-600 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role}
                  {testimonial.company && (
                    <>
                      <br />
                      <span className="text-primary">{testimonial.company}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Quer ser nosso próximo cliente satisfeito?
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span>4.9/5 estrelas baseado em 50+ avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
