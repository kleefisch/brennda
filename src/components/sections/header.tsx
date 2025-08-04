"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Scale, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "A Advogada", href: "/a-advogada" },
    { name: "Áreas de Atuação", href: "/areas-de-atuacao" },
    {
      name: "Serviços",
      href: "#",
      submenu: [
        { name: "Família e Sucessões", href: "/servicos/familia-e-sucessoes" },
        { name: "Direito Civil", href: "/servicos/direito-civil" },
        { name: "Contratos", href: "/servicos/contratos" },
        { name: "Direito do Consumidor", href: "/servicos/direito-do-consumidor" },
      ],
    },
    { name: "Artigos", href: "/artigos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-principal backdrop-blur-sm border-b border-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-destaque" />
            <span className="font-bold text-xl text-claro">
              Dra. Brennda
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-1 text-claro hover:text-destaque transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link
                            href={subItem.href}
                            className="w-full cursor-pointer"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-claro hover:text-destaque transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild className="bg-destaque hover:bg-destaque/80 text-principal">
              <Link href="/contato">Consulta Gratuita</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-claro hover:text-destaque hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-600">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <span className="text-claro font-medium block px-2 py-2">
                        {item.name}
                      </span>
                      <div className="ml-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-gray-300 hover:text-destaque transition-colors block px-2 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-claro hover:text-destaque transition-colors block px-2 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="mx-2 bg-destaque hover:bg-destaque/80 text-principal">
                <Link href="/contato" onClick={() => setIsMenuOpen(false)}>
                  Consulta Gratuita
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
