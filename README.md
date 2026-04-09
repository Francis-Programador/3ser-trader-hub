# 3SER Trader Hub

Uma plataforma educacional e de compartilhamento de conhecimento em **Trading**, desenvolvida com o objetivo de oferecer aulas, recursos e ferramentas de qualidade para traders iniciantes e experientes.

**Slogan**: "Trader Sem Ré" 💰📈

---

## 🚀 Começando

### Pré-requisitos

- **Node.js** >= 18.x
- **Bun** ou **npm** como gerenciador de pacotes

### Instalação

```bash
# Clone o repositório
git clone https://github.com/3ser-trader/trader-hub.git
cd trader-hub

# Instale as dependências
bun install
# ou
npm install
```

### Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env.local` e configure:

```bash
cp .env.example .env.local
```

Edite `.env.local` com suas configurações:

```env
VITE_API_URL=https://api.3ser-trader.com
VITE_ANALYTICS_ID=seu_id
VITE_ENABLE_COMMENTS=true
VITE_GITHUB_URL=https://github.com/3ser-trader
# ... outras variáveis
```

---

## 📦 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `bun run dev` | Inicia servidor de desenvolvimento na porta 8080 |
| `bun run build` | Compila para produção |
| `bun run build:dev` | Compila em modo desenvolvimento |
| `bun run preview` | Visualiza a build de produção |
| `bun run lint` | Executa ESLint para verificar código |
| `bun run test` | Executa testes com Vitest (uma vez) |
| `bun run test:watch` | Executa testes em modo watch |

```bash
# Exemplos
bun run dev        # Desenvolvimento local
bun run build      # Build para produção
bun run test       # Rodar testes
bun run lint       # Verificar código
```

---

## 🏗️ Arquitetura do Projeto

```
3ser-trader-hub/
├── src/
│   ├── assets/              # Imagens e recursos estáticos
│   ├── components/
│   │   ├── Layout.tsx       # Componente de layout principal
│   │   ├── NavLink.tsx      # Componentes de navegação
│   │   └── ui/              # Componentes Shadcn/UI (30+ componentes)
│   ├── hooks/
│   │   ├── use-mobile.tsx   # Hook para detecção de mobile
│   │   └── use-toast.ts     # Hook para notificações
│   ├── lib/
│   │   └── utils.ts         # Funções utilitárias e helpers
│   ├── pages/               # Páginas da aplicação
│   │   ├── Index.tsx        # Homepage (/)
│   │   ├── Aulas.tsx        # Aulas e cursos (/aulas)
│   │   ├── Planilhas.tsx    # Ferramentas e planilhas (/planilhas)
│   │   ├── Blog.tsx         # Blog e artigos (/blog)
│   │   ├── Resultados.tsx   # Resultados de trading (/resultados)
│   │   ├── Redes.tsx        # Redes sociais (/redes)
│   │   ├── Contato.tsx      # Formulário de contato (/contato)
│   │   └── NotFound.tsx     # Página 404
│   ├── services/
│   │   └── api.ts           # Camada de serviços HTTP (NEW)
│   ├── test/
│   │   ├── setup.ts         # Configuração de testes
│   │   ├── example.test.ts  # Testes de exemplo
│   │   └── api.test.ts      # Testes da API (NEW)
│   ├── App.tsx              # Configuração de rotas
│   ├── main.tsx             # Entrada da aplicação
│   └── vite-env.d.ts        # Types do Vite
├── public/                  # Arquivos públicos
├── .env.example             # Template de variáveis de ambiente (NEW)
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configuração TypeScript
├── vite.config.ts           # Configuração Vite
├── vitest.config.ts         # Configuração de testes
├── tailwind.config.ts       # Configuração Tailwind CSS
├── eslint.config.js         # Configuração ESLint
└── README.md                # Este arquivo
```

---

## 🛠️ Stack Tecnológico

### Frontend
- **React** 18.3 - Biblioteca UI
- **TypeScript** 5.8 - Type safety
- **Vite** 5.4 - Build tool (10x mais rápido que webpack)
- **React Router** 6.30 - Roteamento
- **React Hook Form** 7.61 - Gerenciamento de formulários
- **Zod** 3.25 - Validação de schemas

### UI & Styling
- **Tailwind CSS** 3.4 - Utility-first CSS
- **Shadcn/ui** - Componentes acessíveis e customizáveis
- **Radix UI** - Primitivos de baixo nível
- **Lucide React** - Ícones SVG
- **Sonner** - Notificações toast

### Data & State
- **TanStack Query** (React Query) 5.83 - Gerenciamento de cache e dados
- **next-themes** - Tema claro/escuro

### Development
- **Vitest** 3.2 - Testing framework
- **ESLint** 9.32 - Linting
- **PostCSS** - Processamento de CSS
- **SWC** - Compilador TypeScript rápido

---

## 📄 Páginas da Aplicação

### 🏠 Home (`/`)
Página inicial com hero section, estatísticas e call-to-action

### 📚 Aulas (`/aulas`)
Conteúdo educacional e cursos de trading

### 📊 Planilhas (`/planilhas`)
Ferramentas, planilhas e recursos práticos para traders

### 📝 Blog (`/blog`)
Histórias, casos de sucesso e artigos educacionais

### 📈 Resultados (`/resultados`)
Showcase de performance e resultados reais

### 🤝 Redes Sociais (`/redes`)
Links e integração com redes sociais

### 📧 Contato (`/contato`)
Formulário de contato e informações

---

## 🔄 API Services

A aplicação inclui uma **camada de serviços API** centralizada (`src/services/api.ts`) para gerenciar todas as requisições HTTP:

### Endpoints Disponíveis

#### Trading Results
```typescript
import { tradeApi } from '@/services/api';

// Buscar resultados de trading
const results = await tradeApi.getResults(10);
const result = await tradeApi.getResultById('1');
```

#### Courses
```typescript
import { coursesApi } from '@/services/api';

// Buscar módulos de cursos
const modules = await coursesApi.getModules();
const module = await coursesApi.getModuleById('1');
```

#### Statistics
```typescript
import { statsApi } from '@/services/api';

// Estatísticas de alunos
const stats = await statsApi.getStudentStats();
```

#### Contact & Newsletter
```typescript
import { contactApi, newsletterApi } from '@/services/api';

// Enviar formulário de contato
await contactApi.submitContact({
  name: 'João',
  email: 'joao@example.com',
  subject: 'Dúvida',
  message: 'Como faço para...'
});

// Inscrever na newsletter
await newsletterApi.subscribe('email@example.com');
```

---

## 🧪 Testes

### Executar Testes
```bash
# Modo normal (uma vez)
bun run test

# Modo watch (ao vivo)
bun run test:watch
```

### Cobertura de Testes
- ✅ API Services (tradeApi, coursesApi, statsApi, contactApi, newsletterApi)
- ✅ Error handling
- ✅ Network error scenarios
- 📝 Testes de componentes em progresso

---

## 🎨 Componentes UI

O projeto utiliza **Shadcn/ui**, que oferece 30+ componentes customizáveis:

```
Accordion, AlertDialog, Alert, Avatar, Badge, Button, 
Calendar, Card, Carousel, Chart, Checkbox, Command, 
Combobox, ContextMenu, Dialog, Drawer, DropdownMenu, 
Form, HoverCard, Input, InputOTP, Label, Menubar, 
NavigationMenu, Pagination, Popover, Progress, RadioGroup, 
Select, Separator, Sheet, Sidebar, Skeleton, Slider, 
Switch, Table, Tabs, Textarea, Toggle, ToggleGroup, 
Tooltip, Toast
```

**Uso:**
```typescript
import { Button } from "@/components/ui/button";

export function MyComponent() {
  return <Button>Clique aqui</Button>;
}
```

---

## 🌙 Tema Escuro/Claro

O projeto suporta tema claro e escuro via `next-themes`:

```typescript
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Alternar tema
    </button>
  );
}
```

---

## 📱 Responsividade

A aplicação é **totalmente responsiva** usando:
- Tailwind CSS breakpoints
- Hook `use-mobile` para detecção de dispositivos
- Componentes flexíveis e mobile-first

---

## ✅ Checklist de Melhoria

- [x] Camada API centralizada com TypeScript
- [x] Arquivo `.env.example` com configurações
- [x] Testes expandidos com Vitest
- [x] Documentação completa no README
- [x] Suporte a SEO com tags meta
- [x] Suporte a tema escuro/claro

---

## 🚀 Deploy

### Build para Produção
```bash
bun run build
```

A build será gerada em `dist/`

### Plataformas Suportadas
- Vercel
- Netlify
- GitHub Pages
- Qualquer servidor com suporte a SPA

---

## 📝 Licença

Este projeto é propriedade do **3SER Trader Hub**.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 Suporte

- **Email**: contato@3ser-trader.com
- **WhatsApp**: [Link WhatsApp](https://wa.me/5511999999999)
- **Instagram**: [@3ser-trader](https://instagram.com/3ser-trader)
- **LinkedIn**: [3SER Trader](https://linkedin.com/company/3ser-trader)
- **GitHub**: [3ser-trader](https://github.com/3ser-trader)

---

## 🔗 Links Úteis

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/ui](https://ui.shadcn.com)
- [Vite Guide](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [Vitest](https://vitest.dev)

---

**Última atualização**: 9 de abril de 2026

Desenvolvido com ❤️ para traders brasileiros
