# Landing Page - Dra. Marina Jullie Cesario

Landing page moderna e responsiva para clínica de tricologia, desenvolvida com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Tecnologias

- **Next.js 14.2** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização utility-first
- **Framer Motion** - Animações suaves
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
landing/
├── src/
│   ├── app/
│   │   ├── globals.css       # Estilos globais e tokens CSS
│   │   ├── layout.tsx        # Layout raiz com fontes Google
│   │   └── page.tsx          # Página principal (única rota)
│   └── components/
│       ├── Header.tsx         # Cabeçalho fixo com menu responsivo
│       ├── Hero.tsx           # Seção hero com animações
│       ├── ClinicProcedures.tsx
│       ├── ConsultCards.tsx
│       ├── ProcedureGrid.tsx
│       ├── ProfessionalCTA.tsx
│       ├── AboutSplit.tsx
│       ├── Timeline.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/                    # Imagens e assets estáticos
├── tailwind.config.ts         # Configuração Tailwind
└── next.config.mjs           # Configuração Next.js
```

## 🎨 Design Tokens

### Cores
- **cream** (#f8f5f0) - Background principal
- **lilac** (#b19cd9) - Destaque/CTA
- **slate** (#525564) - Texto e seções escuras
- **offwhite** (#f5f3ef) - Cards

### Tipografia
- **Playfair Display** - Títulos (serif)
- **Inter** - Corpo de texto (sans-serif)

## 📱 Responsividade

Totalmente responsivo com breakpoints:
- Mobile: 375px+
- Tablet: 768px+
- Desktop: 1280px+

## 🔗 Links Importantes

### Para alterar informações de contato:

Busque e substitua nos componentes:
- WhatsApp: `https://wa.me/5599999999999`
- Email: `marinajullietricologia@gmail.com`
- Instagram: `@marinajullietricologista`
- Endereço: Av. República Argentina, 1505 Sala 1104

### Para trocar imagens:

Substitua os arquivos em `/public`:
- `hero-doctor.jpg` - Foto principal hero
- `proc1.jpg`, `proc2.jpg`, `proc3.jpg`, `proc4.jpg` - Procedimentos
- `course-tile.jpg`, `consult-tile.jpg` - Tiles profissionais
- `about-photo.jpg` - Foto sobre mim

## 🚀 Deploy no Vercel

### Via GitHub (Recomendado)

1. Crie um repositório no GitHub
2. Suba o código:
```bash
git init
git add .
git commit -m "feat: landing page completa"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repo.git
git push -u origin main
```

3. Vá em [vercel.com](https://vercel.com)
4. Clique em "Add New Project"
5. Importe o repositório do GitHub
6. Clique em "Deploy"

### Via CLI

```bash
npm install -g vercel
vercel
```

## 📝 Seções da Página

1. **Hero** - Introdução com CTA
2. **Procedimentos em Clínica** - Descrição dos serviços
3. **Consultas** - Cards presencial e online
4. **Grid de Procedimentos** - 4 tratamentos em destaque
5. **Máximo Potencial** - Curso e consultoria
6. **Sobre Mim** - História e certificações
7. **Timeline** - Formação acadêmica
8. **Contato** - Formulário e mapa
9. **Footer** - Links e informações

## ✨ Features

- [x] Scroll suave entre seções
- [x] Menu fixo com background blur
- [x] Animações com Framer Motion (fade/slide)
- [x] Hover effects em cards e botões
- [x] Menu mobile responsivo
- [x] Formulário de contato (UI only)
- [x] Mapa integrado Google Maps
- [x] SEO otimizado
- [x] Build sem erros

## 📄 Licença

© 2025 Dra. Marina Jullie Cesario. Todos os direitos reservados.
