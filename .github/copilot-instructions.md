# Copilot Instructions - Site de Advocacia Brennda

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Contexto do Projeto

Este é um site profissional para uma advogada, construído como MVP (Minimum Viable Product) com foco em:
- Captação de clientes
- SEO otimizado
- Performance e velocidade
- Design moderno e responsivo

## Stack de Tecnologia

- **Framework**: Next.js 14+ com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4.0
- **Componentes UI**: Shadcn UI
- **Ícones**: Lucide React
- **CMS**: Sanity.io (para blog)
- **Formulários**: React Hook Form + Zod
- **Animações**: Framer Motion
- **Deploy**: Vercel

## Diretrizes de Código

### Componentes
- Use componentes funcionais com TypeScript
- Aplique HTML semântico (`<header>`, `<main>`, `<section>`, `<footer>`)
- Implemente design responsivo com Tailwind CSS
- Use Shadcn UI para componentes de interface

### SEO e Acessibilidade
- Sempre inclua metadados apropriados
- Use tags de heading hierárquicas (h1, h2, h3...)
- Implemente alt text descritivo para imagens
- Use next/image com propriedade priority quando necessário

### Estrutura de Arquivos
- `/src/app`: Páginas e rotas (App Router)
- `/src/components/sections`: Seções específicas da homepage
- `/src/components/ui`: Componentes do Shadcn UI
- `/src/lib`: Funções auxiliares e configurações

### Estilo de Código
- Use nomes descritivos em português para componentes relacionados ao negócio
- Aplique clean code e princípios SOLID
- Prefira composition over inheritance
- Use TypeScript strict mode

## Páginas Principais

1. **Homepage** (`/`) - Seções: Hero, Áreas de Atuação, Sobre, Depoimentos, FAQ, Contato
2. **A Advogada** (`/a-advogada`) - Perfil completo da profissional
3. **Áreas de Atuação** (`/areas-de-atuacao`) - Lista das especialidades
4. **Serviços** (4 subpáginas):
   - `/servicos/familia-e-sucessoes`
   - `/servicos/direito-civil`
   - `/servicos/contratos`
   - `/servicos/direito-do-consumidor`
5. **Blog** (`/artigos`) - Lista de artigos do Sanity.io
6. **Artigo Individual** (`/artigos/[slug]`) - Post individual
7. **Contato** (`/contato`) - Formulário e informações

## Paleta de Cores
- Use tons profissionais e sóbrios
- Priorize acessibilidade e contraste
- Mantenha consistência visual

## Performance
- Otimize imagens com next/image
- Use lazy loading quando apropriado
- Minimize bundle size
- Implemente ISR quando possível

Sempre priorize a experiência do usuário e a conversão de visitantes em clientes.
