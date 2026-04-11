import { Crown, Lock, Zap, Shield, BookOpen, BarChart3, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  { icon: BookOpen, title: "Cursos Avançados", desc: "Acesso completo a todos os módulos, incluindo Price Action avançado e estratégias institucionais." },
  { icon: BarChart3, title: "Relatórios Exclusivos", desc: "Análises detalhadas do mercado e relatórios semanais de desempenho." },
  { icon: MessageCircle, title: "Grupo Privado", desc: "Acesso ao grupo VIP no WhatsApp com suporte direto e discussão de operações." },
  { icon: Shield, title: "Suporte Prioritário", desc: "Tira dúvidas directamente comigo. Respostas em até 24h." },
];

const Vip = () => {
  useScrollReveal();

  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Crown className="h-4 w-4" />
              Acesso Premium
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Área <span className="text-gradient-blue">VIP</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Conteúdo exclusivo para quem quer levar o trading a sério. Em breve disponível.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {benefits.map((b, i) => (
              <div key={b.title} className="reveal glass rounded-2xl p-8 card-hover" style={{ transitionDelay: `${i * 0.1}s` }}>
                <b.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal max-w-lg mx-auto">
            <div className="glass rounded-2xl p-10 text-center gradient-border">
              <Lock className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="font-heading font-bold text-2xl mb-3">Em Breve</h3>
              <p className="text-muted-foreground mb-8">
                A área VIP está em desenvolvimento. Deixa o teu email para ser notificado quando abrir.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Teu email"
                  className="flex-1 px-5 py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold glow-blue gap-2 rounded-xl">
                  <Zap className="h-4 w-4" />
                  Notificar-me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vip;
