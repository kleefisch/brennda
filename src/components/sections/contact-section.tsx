"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z.string()
    .email("Por favor, insira um e-mail válido"),
  subject: z.string()
    .min(5, "Assunto deve ter pelo menos 5 caracteres")
    .max(150, "Assunto deve ter no máximo 150 caracteres"),
  message: z.string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envio do formulário
      console.log('Dados do formulário:', data);
      
      // Aqui você pode implementar o envio real do formulário
      // Por exemplo, usar uma API route do Next.js ou um serviço como Formspree
      
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua da Consolação, 1234 - Sala 567\nCentro, São Paulo - SP\nCEP: 01302-000",
      link: "https://maps.google.com/?q=Rua+da+Consolação+1234+São+Paulo"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 3333-4444\n(11) 99999-9999",
      link: "tel:+551133334444"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@brennda-advocacia.com.br\ndra.brennda@adv.oab.br",
      link: "mailto:contato@brennda-advocacia.com.br"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 9h às 18h\nSábado: 9h às 13h\nWhatsApp: 24 horas",
      link: null
    }
  ];

  return (
    <section className="py-20 bg-secundario">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-principal mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Pronto para defender seus direitos? Entre em contato conosco e 
            agende sua consulta gratuita. Estamos aqui para ajudar você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-principal mb-8">
              Informações para Contato
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destaque/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-destaque" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-principal mb-1">
                        {info.title}
                      </h4>
                      <div className="text-gray-700 whitespace-pre-line">
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="hover:text-destaque transition-colors"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          info.content
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="h-6 w-6 text-green-600" />
                <h4 className="font-semibold text-green-900">
                  Atendimento WhatsApp 24h
                </h4>
              </div>
              <p className="text-green-700 mb-4">
                Para urgências ou dúvidas rápidas, fale conosco pelo WhatsApp.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a 
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-claro p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-principal mb-6">
              Envie sua Mensagem
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">
                  Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Nome Completo*</Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder="Seu nome completo"
                  className="mt-1"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">E-mail*</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="seu@email.com"
                  className="mt-1"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="subject">Assunto*</Label>
                <Input
                  id="subject"
                  {...register('subject')}
                  placeholder="Assunto da sua consulta"
                  className="mt-1"
                />
                {errors.subject && (
                  <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Mensagem*</Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder="Descreva sua situação ou dúvida..."
                  rows={5}
                  className="mt-1"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              * Campos obrigatórios. Seus dados são tratados com total confidencialidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
