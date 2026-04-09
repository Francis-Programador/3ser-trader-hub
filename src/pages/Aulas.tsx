import { useState } from "react";
import { Play, Lock, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

type Level = "iniciante" | "intermediario" | "avancado";

const lessons: Record<Level, { title: string; desc: string; duration: string; locked?: boolean }[]> = {
  iniciante: [
    { title: "O que são Opções Binárias?", desc: "Entenda o básico do mercado e como funciona uma operação.", duration: "12 min" },
    { title: "Gestão de Banca para Iniciantes", desc: "Como proteger seu capital desde o primeiro dia.", duration: "15 min" },
    { title: "Leitura de Velas (Candlestick)", desc: "Aprenda a interpretar os gráficos de forma simples.", duration: "18 min" },
    { title: "Primeira Operação na Demo", desc: "Passo a passo para sua primeira operação segura.", duration: "10 min" },
  ],
  intermediario: [
    { title: "Suportes e Resistências", desc: "Identifique zonas de preço importantes no gráfico.", duration: "20 min" },
    { title: "Estratégia de Tendência", desc: "Como operar a favor da tendência com consistência.", duration: "22 min" },
    { title: "Gerenciamento Avançado", desc: "Martingale vs. Soros: o que realmente funciona.", duration: "25 min" },
  ],
  avancado: [
    { title: "Price Action Avançado", desc: "Padrões complexos e leitura de fluxo institucional.", duration: "30 min", locked: true },
    { title: "Psicologia do Trader", desc: "Controle emocional e disciplina operacional.", duration: "28 min", locked: true },
    { title: "Montando seu Plano de Trading", desc: "Crie um plano completo e personalizado.", duration: "35 min", locked: true },
  ],
};

const levelLabels: Record<Level, string> = {
  iniciante: "Iniciante",
  intermediario: "Intermédio",
  avancado: "Avançado",
};

const Aulas = () => {
  const [activeLevel, setActiveLevel] = useState<Level>("iniciante");

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              Central de Aulas
            </div>
            <h1 className="text-4xl font-heading font-bold mb-4">
              Aprenda trading do <span className="text-gradient-neon">zero ao avançado</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Conteúdo organizado por nível para você evoluir no seu ritmo.
            </p>
          </div>

          {/* Level tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {(Object.keys(lessons) as Level[]).map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`px-6 py-2.5 rounded-lg font-heading font-semibold text-sm transition-all ${
                  activeLevel === level
                    ? "bg-primary text-primary-foreground glow-green"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {levelLabels[level]}
              </button>
            ))}
          </div>

          {/* Lessons grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {lessons[activeLevel].map((lesson, i) => (
              <div
                key={i}
                className={`glass rounded-xl p-6 transition-all ${
                  lesson.locked ? "opacity-60" : "hover:border-primary/30"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {lesson.locked ? (
                      <Lock className="h-5 w-5 text-accent" />
                    ) : (
                      <Play className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{lesson.duration}</span>
                </div>
                <h3 className="font-heading font-bold mb-2">{lesson.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{lesson.desc}</p>
                {lesson.locked ? (
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                    <Lock className="h-3 w-3" /> Conteúdo VIP (em breve)
                  </span>
                ) : (
                  <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 gap-2">
                    <Play className="h-4 w-4" /> Assistir
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Aulas;
