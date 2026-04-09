import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, BookOpen, Download, MessageCircle, TrendingUp, Target, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useSEO } from "@/hooks/use-seo";

const stats = [
  { label: "Taxa de Acerto", value: "72%", icon: Target },
  { label: "Operações", value: "1.200+", icon: BarChart3 },
  { label: "Alunos", value: "500+", icon: Users },
  { label: "Experiência", value: "5 Anos", icon: Shield },
];

const Index = () => {
  const [email, setEmail] = useState("");

  useSEO({
    title: "3SER Trader Sem Ré - Trading com Disciplina e Resultado",
    description:
      "Acompanhe uma jornada real no trading. Sem promessas falsas, sem guru. Apenas consistência, gestão e evolução. Aprenda com quem vive do trading.",
    keywords: "trading, opções binárias, educação, aulas, resultados reais",
    ogUrl: "https://3ser-trader.com",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Trading background" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              Jornada Real no Trading
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
              Trading sem ilusões.{" "}
              <span className="text-gradient-neon">Resultados com disciplina.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Acompanhe uma jornada real no mercado de opções binárias. Sem promessas falsas, sem guru. Apenas consistência, gestão e evolução.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/planilhas">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-heading font-semibold gap-2">
                  <Download className="h-5 w-5" />
                  Planilha Gratuita
                </Button>
              </Link>
              <Link to="/aulas">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 font-heading font-semibold gap-2">
                  <BookOpen className="h-5 w-5" />
                  Ver Aulas
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-card/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-heading font-bold text-gradient-neon">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem sou eu */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Quem é o <span className="text-gradient-gold">3SER</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Sou um trader real, que documenta cada passo da minha jornada. Não sou guru, não vendo sonhos. 
              Compartilho meus erros, acertos, planilhas e métodos para que você possa aprender com transparência total.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acredito que disciplina e gestão de banca são mais importantes que qualquer estratégia mirabolante. 
              Meu objetivo é construir uma comunidade de traders conscientes e consistentes.
            </p>
          </div>
        </div>
      </section>

      {/* Seções rápidas */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            O que você encontra <span className="text-gradient-neon">aqui</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Aulas", desc: "Conteúdo organizado do básico ao avançado para você evoluir no trading.", link: "/aulas" },
              { icon: Download, title: "Planilhas", desc: "Ferramentas de gestão de banca para você operar com controle e disciplina.", link: "/planilhas" },
              { icon: BarChart3, title: "Resultados", desc: "Dashboard transparente com taxas de acerto, ganhos e evolução real.", link: "/resultados" },
            ].map((item) => (
              <Link key={item.title} to={item.link} className="glass rounded-xl p-6 hover:border-primary/30 transition-all group">
                <item.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm mt-4 font-medium">
                  Acessar <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos placeholder */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-4">
            O que dizem sobre a <span className="text-gradient-gold">jornada</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Em breve, depoimentos reais da comunidade.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground font-heading font-bold">?</div>
                  <div>
                    <div className="text-sm font-medium">Em breve</div>
                    <div className="text-xs text-muted-foreground">Membro da comunidade</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm italic">"Espaço reservado para depoimentos reais da comunidade 3SER."</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Receba conteúdo <span className="text-gradient-neon">exclusivo</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Deixe seu email e receba dicas, planilhas e atualizações diretamente.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) {
                  alert("Email cadastrado com sucesso! Em breve você receberá nosso conteúdo.");
                  setEmail("");
                }
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold glow-green">
                Quero Receber
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold mb-8">
            Me acompanhe nas <span className="text-gradient-gold">redes</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: TrendingUp, label: "YouTube", href: "#", color: "hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400" },
              { icon: Target, label: "Instagram", href: "#", color: "hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-400" },
              { icon: MessageCircle, label: "WhatsApp", href: "#", color: "hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-400" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass rounded-xl px-8 py-4 flex items-center gap-3 text-muted-foreground transition-all ${social.color}`}
              >
                <social.icon className="h-6 w-6" />
                <span className="font-heading font-semibold">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
