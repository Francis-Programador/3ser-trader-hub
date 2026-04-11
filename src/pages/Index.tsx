import { Link } from "react-router-dom";
import {
  ArrowRight, BarChart3, BookOpen, Download, TrendingUp, Target,
  Shield, Users, AlertTriangle, Brain, Zap, LineChart, Crown,
  ChevronRight, Play, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useSEO } from "@/hooks/use-seo";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  const [email, setEmail] = useState("");
  useScrollReveal();

  try {
    useSEO({
      title: "3SER Trader Sem Ré - Trading com Disciplina e Resultado",
      description: "Aprende a operar com estratégia, gestão e mentalidade profissional. Sem promessas falsas. Apenas consistência e evolução real.",
      keywords: "trading, opções binárias, educação, aulas, resultados reais",
      ogUrl: "https://3ser-trader.com",
    });
  } catch (error) {
    console.warn('Failed to update SEO:', error);
  }

  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Trading background" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
        </div>
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <TrendingUp className="h-4 w-4" />
              Plataforma de Trading Profissional
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Trading real.{" "}
              <br className="hidden sm:block" />
              <span className="text-shimmer">Sem atalhos. Sem ilusões.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Aprende a operar com estratégia, gestão e mentalidade profissional.
              Uma jornada real, documentada com transparência total.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/aulas">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-heading font-semibold gap-2 h-13 px-8 text-base">
                  Começar Agora
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/planilhas">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary/50 font-heading font-semibold gap-2 h-13 px-8 text-base">
                  <Download className="h-5 w-5" />
                  Conteúdo Gratuito
                </Button>
              </Link>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 max-w-md animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              {[
                { value: "72%", label: "Taxa de Acerto" },
                { value: "1.200+", label: "Operações" },
                { value: "500+", label: "Alunos" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-gradient-neon">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-primary" />
          </div>
        </div>
      </section>

      {/* ===== PROBLEMA ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
        <div className="container relative">
          <div className="text-center mb-16 reveal">
            <span className="text-sm font-heading font-semibold text-destructive/80 uppercase tracking-widest mb-4 block">O Problema</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Por que a maioria dos traders <span className="text-destructive">fracassa</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              90% dos traders perdem dinheiro. Reconheces algum destes padrões?
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: AlertTriangle, title: "Perdas Constantes", desc: "Entram no mercado sem gestão de banca e perdem tudo em dias. Sem plano, sem controlo.", color: "text-destructive" },
              { icon: Target, title: "Sem Estratégia", desc: "Operam por feeling ou copiando sinais. Sem um sistema próprio testado e validado.", color: "text-accent" },
              { icon: Brain, title: "Emocional Descontrolado", desc: "Ganância quando ganham, desespero quando perdem. O ciclo que destrói qualquer banca.", color: "text-primary" },
            ].map((item, i) => (
              <div key={item.title} className="reveal glass rounded-2xl p-8 text-center card-hover" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className={`w-16 h-16 rounded-2xl bg-secondary/80 flex items-center justify-center mx-auto mb-6 ${item.color}`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUÇÃO ===== */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4 block">A Solução</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                O projeto <span className="text-gradient-neon">3SER</span> é o teu guia
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Não sou guru. Não vendo sonhos. Sou um trader real que documenta cada passo da jornada —
                erros, acertos, planilhas e métodos — com transparência total.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Disciplina e gestão de banca são mais importantes que qualquer estratégia mirabolante.
                O objetivo é construir traders conscientes e consistentes.
              </p>
              <Link to="/aulas">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-heading font-semibold gap-2">
                  Explorar Conteúdo <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="reveal grid grid-cols-2 gap-4">
              {[
                { icon: Shield, value: "5 Anos", label: "De experiência", glow: "glow-green" },
                { icon: BarChart3, value: "1.200+", label: "Operações feitas", glow: "" },
                { icon: Target, value: "72%", label: "Win rate", glow: "glow-blue" },
                { icon: Users, value: "500+", label: "Alunos activos", glow: "" },
              ].map((s) => (
                <div key={s.label} className={`glass rounded-2xl p-6 text-center card-hover ${s.glow}`}>
                  <s.icon className="h-7 w-7 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-heading font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== O QUE VAI APRENDER ===== */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest mb-4 block">Conteúdo</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              O que vais <span className="text-gradient-blue">aprender</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: LineChart, title: "Estratégias", items: ["Price Action", "Indicadores Técnicos", "Análise Institucional", "Padrões de Velas"], color: "primary" },
              { icon: Shield, title: "Gestão de Risco", items: ["Gestão de Banca", "Stop Loss & Take Profit", "Risco por Operação", "Diário de Trading"], color: "accent" },
              { icon: Brain, title: "Psicologia do Trader", items: ["Controlo Emocional", "Disciplina Operacional", "Mentalidade Vencedora", "Rotinas de Sucesso"], color: "primary" },
            ].map((cat, i) => (
              <div key={cat.title} className="reveal glass rounded-2xl p-8 card-hover gradient-border" style={{ transitionDelay: `${i * 0.15}s` }}>
                <cat.icon className={`h-10 w-10 text-${cat.color} mb-6`} />
                <h3 className="font-heading font-bold text-xl mb-4">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle className={`h-4 w-4 text-${cat.color} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CURSOS NETFLIX ===== */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container">
          <div className="flex items-end justify-between mb-10 reveal">
            <div>
              <span className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4 block">Cursos</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Começa a tua <span className="text-gradient-neon">jornada</span>
              </h2>
            </div>
            <Link to="/aulas" className="hidden md:flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all">
              Ver todos <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { level: "Iniciante", emoji: "🟢", desc: "Fundamentos do trading, leitura de velas e primeiras operações na demo.", lessons: 4, color: "primary" },
              { level: "Intermédio", emoji: "🟡", desc: "Suportes, resistências, estratégias de tendência e gerenciamento avançado.", lessons: 3, color: "accent" },
              { level: "Avançado", emoji: "🔴", desc: "Price Action avançado, psicologia do trader e plano de trading completo.", lessons: 3, color: "destructive", locked: true },
            ].map((course, i) => (
              <Link
                key={course.level}
                to="/aulas"
                className="reveal netflix-card group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative aspect-video bg-gradient-to-br from-secondary to-card rounded-xl overflow-hidden mb-4 border border-border/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl">{course.emoji}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-heading font-semibold bg-secondary/80 backdrop-blur-sm px-2 py-1 rounded">
                      {course.lessons} aulas
                    </span>
                    {course.locked && (
                      <span className="text-xs font-heading font-semibold bg-accent/20 text-accent px-2 py-1 rounded flex items-center gap-1">
                        <Crown className="h-3 w-3" /> VIP
                      </span>
                    )}
                  </div>
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center glow-green">
                      <Play className="h-6 w-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors">{course.level}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{course.desc}</p>
              </Link>
            ))}
          </div>

          <div className="md:hidden text-center mt-8 reveal">
            <Link to="/aulas" className="text-sm text-primary font-medium inline-flex items-center gap-1">
              Ver todos os cursos <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROVA SOCIAL ===== */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest mb-4 block">Comunidade</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              O que dizem sobre a <span className="text-gradient-gold">jornada</span>
            </h2>
            <p className="text-muted-foreground">Depoimentos reais da comunidade 3SER.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Carlos M.", role: "Trader Iniciante", text: "Depois de perder muito dinheiro com sinais, encontrei o 3SER. A abordagem real e transparente mudou tudo.", avatar: "CM" },
              { name: "Ana S.", role: "Trader Intermédio", text: "A planilha de gestão de banca foi um divisor de águas. Pela primeira vez tenho controlo sobre as minhas operações.", avatar: "AS" },
              { name: "Pedro L.", role: "Trader Avançado", text: "O conteúdo sobre psicologia do trader é excepcional. Finalmente entendi porque perdia dinheiro.", avatar: "PL" },
            ].map((t, i) => (
              <div key={t.name} className="reveal glass rounded-2xl p-8 card-hover" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center font-heading font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[1,2,3,4,5].map((s) => (
                    <Zap key={s} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA PLANILHA ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-card/50 to-accent/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Download className="h-4 w-4" />
              100% Gratuito
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Baixa a planilha de <span className="text-gradient-gold">gestão de banca</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
              A mesma ferramenta que uso para controlar todas as minhas operações. Gratuita, completa e pronta para usar.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) {
                  alert("Email cadastrado com sucesso! Em breve receberás o link de download.");
                  setEmail("");
                }
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Teu melhor email"
                className="flex-1 px-5 py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold glow-green gap-2 px-6 py-3.5 h-auto rounded-xl text-base">
                <Download className="h-5 w-5" />
                Baixar Agora
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== SEÇÕES RÁPIDAS ===== */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 reveal">
            {[
              { icon: BookOpen, title: "Histórias Reais", desc: "Erros, acertos e lições de uma jornada real no trading.", link: "/blog", cta: "Ler histórias" },
              { icon: BarChart3, title: "Resultados", desc: "Dashboard transparente com taxas de acerto e evolução real.", link: "/resultados", cta: "Ver resultados" },
              { icon: Crown, title: "Área VIP", desc: "Conteúdo exclusivo, estratégias avançadas e suporte prioritário.", link: "/vip", cta: "Saber mais" },
            ].map((item) => (
              <Link key={item.title} to={item.link} className="glass rounded-2xl p-8 card-hover group gradient-border">
                <item.icon className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-heading font-semibold group-hover:gap-3 transition-all">
                  {item.cta} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
