"use client";
import { useState, useRef, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="mb-4">
        <Quote className="h-8 w-8 text-destaque/20" />
      </div>
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
      </div>
      <blockquote className="text-gray-600 mb-6 leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>
      <div className="border-t border-gray-100 pt-4">
        <div className="font-semibold text-principal">{testimonial.name}</div>
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
  );
}

function CarouselTestimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Autoplay
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 15000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, testimonials.length]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe left
          setCurrent((prev) => (prev + 1) % testimonials.length);
        } else {
          // Swipe right
          setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Setas */}
      <button
        aria-label="Anterior"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-destaque/70 hover:text-destaque transition-colors"
        onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
        style={{ background: "none" }}
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        aria-label="Próximo"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-destaque/70 hover:text-destaque transition-colors"
        onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
        style={{ background: "none" }}
      >
        <ChevronRight className="h-7 w-7" />
      </button>
      {/* Card com transição */}
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)`, display: 'flex' }}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="min-w-full">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      {/* Indicadores */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${current === idx ? 'bg-destaque' : 'bg-gray-300'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir para depoimento ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialsSection() {
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

        {/* Carrossel Mobile/Tablet, Grid Desktop */}
        <div className="relative">
          {/* Mobile/Tablet: Carrossel */}
          <div className="block md:hidden">
            <CarouselTestimonials testimonials={testimonials} />
          </div>
          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* CTA + Avaliação */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Quer ser nosso próximo cliente satisfeito?
          </p>
          <div className="flex flex-col items-center justify-center text-sm text-gray-600 gap-1">
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="block text-center">4.9/5 estrelas baseado em 50+ avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;