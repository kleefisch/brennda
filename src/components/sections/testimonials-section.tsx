import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "M. S. Oliveira",
    role: "Dona de Casa",
    company: "",
    content: "Enfrentei um divórcio muito complicado após 15 anos de casada. A Dra. Brennda foi incansável na defesa dos meus direitos e dos meus filhos. Sua firmeza fez toda a diferença. Hoje tenho um acordo justo e sou eternamente grata.",
    rating: 5
  },
  {
    name: "R. C. Martins",
    role: "Médica",
    company: "",
    content: "Comprei meu apartamento e após alguns meses começaram a aparecer infiltrações e problemas elétricos graves. A construtora se negava a resolver. A Dra. Brennda foi firme e conseguiu todos os reparos mais indenização.",
    rating: 5
  },
  {
    name: "J. Mendes",
    role: "Cabeleireira",
    company: "",
    content: "Estava com problemas na pensão alimentícia do meu filho há meses. A Dra. Brennda conduziu todo o processo com muita competência e sensibilidade com um resultado justo.",
    rating: 5
  },
  {
    name: "L. A. Costa",
    role: "Aposentada",
    company: "",
    content: "Descobri um empréstimo fraudulento em meu nome e estavam descontando da minha aposentadoria. A Dra. Brennda reverteu tudo e tive todos os valores devolvidos. Muito obrigada por tudo!",
    rating: 5
  },
  {
    name: "C. M. Silva",
    role: "Professora",
    company: "",
    content: "Meu plano de saúde negava constantemente meu tratamento. A Dra. Brennda lutou com determinação e conseguiu não só a autorização como também indenização pelos transtornos. Profissional que realmente se importa com o bem-estar dos clientes.",
    rating: 5
  },
  {
    name: "T. Almeida",
    role: "Comerciante",
    company: "",
    content: "Enfrentei uma disputa familiar complexa por herança que se arrastava há anos. A Dra. Brennda trouxe clareza ao processo e conseguiu um acordo justo para todos os herdeiros. Sua competência e sensibilidade foram essenciais para resolver essa situação delicada.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secundario">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja alguns depoimentos de quem confiou em nosso trabalho.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-destaque/20" />
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
                <div className="font-semibold text-principal">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role}
                  {testimonial.company && (
                    <>
                      <br />
                      <span className="text-destaque">{testimonial.company}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Quer ser nosso próximo cliente satisfeito?
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
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
