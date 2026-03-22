# Caroline Querino

## 🇬🇧 English (Primary)

This repository contains the development of Caroline Querino's website.

### About the project

This website is being developed as:

- a practical web development assignment;
- a portfolio project focused on showcasing code organization, responsive UI, and good practices with React + TypeScript.

The base layout was inspired by the design file:
[Figma design file](https://www.figma.com/design/rk8ARwoJp0X0o3vPCV4hdY/Site-Carol)

### Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS

### Run locally

1. Install dependencies:

```bash
npm install
```

1. Start the development server:

```bash
npm run dev
```

### Goal

To publish and continuously improve this project as part of my professional portfolio, documenting visual and functional enhancements over time.

### Client Portal (secure publishing)

This project now includes a discreet client portal for publishing and managing content:

- URL: `/portal-cliente/login`
- Features: create, edit, and delete `upcoming events`, `interviews`, `articles`, and `opinions`
- Access: only authenticated user (Supabase Auth)

Setup steps:

1. Create a Supabase project.
1. In Supabase SQL Editor, run `supabase/schema.sql`.
1. Create only one user in Supabase Auth (your client).
1. Disable open signups in Supabase Auth settings.
1. Add environment variables from `.env.example` into your deployment (Hostinger) and local `.env`.

After setup, content created by your client will be shown automatically in public pages (Media and Contents).

---

## 🇧🇷 Português (Secundário)

Este repositório contém o desenvolvimento do site da Caroline Querino.

### Sobre o projeto

Este site está sendo desenvolvido como:

- trabalho prático de desenvolvimento web;
- projeto de portfólio, com foco em demonstrar organização de código, interface responsiva e boas práticas com React + TypeScript.

O layout base do projeto foi inspirado no arquivo de design:
[Arquivo no Figma](https://www.figma.com/design/rk8ARwoJp0X0o3vPCV4hdY/Site-Carol)

### Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS

### Como executar localmente

1. Instale as dependências:

```bash
npm install
```

1. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

### Objetivo

Publicar e evoluir este projeto como parte do meu portfólio profissional, registrando melhorias visuais e funcionais ao longo do desenvolvimento.

### Portal da Cliente (publicação com segurança)

Este projeto agora inclui um portal discreto para a cliente publicar e gerenciar conteúdo:

- URL: `/portal-cliente/login`
- Recursos: criar, editar e excluir `próximos eventos`, `entrevistas`, `artigos` e `opiniões`
- Acesso: apenas usuário autenticado (Supabase Auth)

Passos de configuração:

1. Crie um projeto no Supabase.
1. No SQL Editor do Supabase, execute `supabase/schema.sql`.
1. Crie apenas uma usuária no Supabase Auth (sua cliente).
1. Desative cadastro público (signups) nas configurações de Auth.
1. Adicione as variáveis de `.env.example` no deploy (Hostinger) e no `.env` local.

Depois da configuração, o conteúdo publicado pela cliente aparece automaticamente nas páginas públicas (Mídias e Conteúdos).
