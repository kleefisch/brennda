import Link from "next/link";
import { Scale, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Clover } from "lucide-react";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "A Advogada", href: "/a-advogada" },
    { name: "Áreas de Atuação", href: "/areas-de-atuacao" },
    { name: "Artigos", href: "/artigos" },
    { name: "Contato", href: "/contato" },
  ];

  const services = [
    { name: "Direito de Família", href: "/servicos/familia-e-sucessoes" },
    { name: "Direito Civil", href: "/servicos/direito-civil" },
    { name: "Contratos", href: "/servicos/contratos" },
    { name: "Direito do Consumidor", href: "/servicos/direito-do-consumidor" },
  ];

  const legalLinks = [
    { name: "Política de Privacidade", href: "/politica-privacidade" },
    { name: "Termos de Uso", href: "/termos-uso" },
    { name: "Cookies", href: "/cookies" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  ];

  return (
    <footer className="bg-principal text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {/* Brand & Contact */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#9A9162] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-base">BS</span>
              </div>
              <div className="flex items-center flex-nowrap whitespace-nowrap">
                <span className="text-xl font-semibold tracking-wider text-claro">BRENNDA SILVA</span>
                <span className="text-destaque mx-2">|</span>
                <span className="text-xl font-light tracking-wider text-gray-300">ADVOCACIA</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Advocacia especializada com mais de 10 anos de experiência, 
              oferecendo soluções jurídicas personalizadas e eficazes.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-destaque flex-shrink-0" />
                <span className="text-sm">
                  Av. 136, 777, Setor Marista, Goiânia - GO
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-destaque flex-shrink-0" />
                <span className="text-sm">(62) 98267-7272</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-destaque flex-shrink-0" />
                <span className="text-sm">contato@brenndasilvaadv.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-destaque flex-shrink-0" />
                <span className="text-sm">Seg-Sex: 9h-18h</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-claro mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-destaque transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-claro mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-destaque transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-claro mb-6">Conecte-se</h3>
            <p className="text-gray-400 text-sm mb-4">
              Siga-nos nas redes sociais para dicas jurídicas e novidades.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-principal/60 rounded-lg flex items-center justify-center hover:bg-destaque hover:text-principal transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <div className="bg-principal/60 backdrop-blur-sm border border-destaque/20 p-4 rounded-lg">
              <h4 className="font-semibold text-claro mb-2">Consulta Jurídica</h4>
              <p className="text-gray-400 text-sm mb-3">
                Agende sua consulta jurídica hoje mesmo.
              </p>
              <WhatsappButton size="lg" iconSize={20} className="text-center py-2 px-4 rounded font-medium text-sm">
                Agendar Agora
              </WhatsappButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-destaque/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} Dra. Brennda Advocacia. Todos os direitos reservados.
            </div>

            {/* Legal Links & KleeLabs */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex space-x-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-destaque transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              {/* KleeLabs Credit */}
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Desenvolvido por</span>
                <a
                  href="https://kleelabs.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:text-white transition-colors group"
                >
                  <Clover className="h-4 w-4 group-hover:text-green-400 transition-colors" />
                  <span className="font-medium">
                    <span className="group-hover:text-green-400 transition-colors">Klee</span>
                    <span className="group-hover:text-white transition-colors">Labs</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* OAB Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              Dra. Brennda Silva - OAB/SP 123.456 | 
              Este site está em conformidade com o Código de Ética da OAB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
