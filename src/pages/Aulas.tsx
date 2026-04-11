import { useState } from "react";
import { Play, Lock, BookOpen, X, Crown, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Level = "iniciante" | "intermediario" | "avancado";

interface Lesson {
  title: string;
  desc: string;
  duration: string;
  youtubeId?: string;
  locked?: boolean;
}

const lessons: Record<Level, Lesson[]> = {
  iniciante: [
    { title: "O que são Opções Binárias?", desc: "Entenda o básico do mercado e como funciona uma operação.", duration: "12 min", youtubeId: "" },
    { title: "Gestão de Banca para Iniciantes", desc: "Como proteger seu capital desde o primeiro dia.", duration: "15 min", youtubeId: "" },
    { title: "Leitura de Velas (Candlestick)", desc: "Aprenda a interpretar os gráficos de forma simples.", duration: "18 min", youtubeId: "" },
    { title: "Primeira Operação na Demo", desc: "Passo a passo para sua primeira operação segura.", duration: "10 min", youtubeId: "" },
  ],
  intermediario: [
    { title: "Suportes e Resistências", desc: "Identifique zonas de preço importantes no gráfico.", duration: "20 min", youtubeId: "" },
    { title: "Estratégia de Tendência", desc: "Como operar a favor da tendência com consistência.", duration: "22 min", youtubeId: "" },
    { title: "Gerenciamento Avançado", desc: "Martingale vs. Soros: o que realmente funciona.", duration: "25 min", youtubeId: "" },
  ],
  avancado: [
    { title: "Price Action Avançado", desc: "Padrões complexos e leitura de fluxo institucional.", duration: "30 min", locked: true },
    { title: "Psicologia do Trader", desc: "Controle emocional e disciplina operacional.", duration: "28 min", locked: true },
    { title: "Montando seu Plano de Trading", desc: "Crie um plano completo e personalizado.", duration: "35 min", locked: true },
  ],
};

const levelConfig: Record<Level, { label: string; emoji: string; color: string }> = {
  iniciante: { label: "Iniciante", emoji: "🟢", color: "primary" },
  intermediario: { label: "Intermédio", emoji: "🟡", color: "accent" },
  avancado: { label: "Avançado", emoji: "🔴", color: "destructive" },
};

function getYouTubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : url;
}

const Aulas = () => {
  const [activeLevel, setActiveLevel] = useState<Level>("iniciante");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  useScrollReveal();

  return (
    <Layout>
      {/* Video modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors">
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden border border-border glow-green">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Aula"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      <section className="py-24">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Central de Cursos
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Do zero ao <span className="text-shimmer">profissional</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              Conteúdo organizado por nível para evoluíres no teu ritmo.
            </p>
          </div>

          {/* Level tabs */}
          <div className="flex justify-center gap-3 mb-16 reveal">
            {(Object.keys(lessons) as Level[]).map((level) => {
              const config = levelConfig[level];
              return (
                <button
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className={`px-6 py-3 rounded-xl font-heading font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeLevel === level
                      ? "bg-primary text-primary-foreground glow-green scale-105"
                      : "bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <span>{config.emoji}</span>
                  {config.label}
                </button>
              );
            })}
          </div>

          {/* Lessons grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {lessons[activeLevel].map((lesson, i) => {
              const videoId = lesson.youtubeId ? getYouTubeId(lesson.youtubeId) : "";
              const hasVideo = videoId.length === 11;

              return (
                <div
                  key={i}
                  className={`reveal glass rounded-2xl overflow-hidden transition-all duration-300 card-hover ${
                    lesson.locked ? "opacity-60" : ""
                  }`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Thumbnail */}
                  {hasVideo ? (
                    <button
                      onClick={() => setActiveVideo(videoId)}
                      className="relative w-full aspect-video bg-secondary group cursor-pointer"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={lesson.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center glow-green group-hover:scale-110 transition-transform">
                          <Play className="h-6 w-6 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    </button>
                  ) : (
                    <div className="relative w-full aspect-video bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                      {lesson.locked ? (
                        <Lock className="h-10 w-10 text-accent/50" />
                      ) : (
                        <Play className="h-10 w-10 text-primary/30" />
                      )}
                      {lesson.locked && (
                        <span className="absolute top-3 right-3 text-xs font-heading font-semibold bg-accent/20 text-accent px-2 py-1 rounded flex items-center gap-1">
                          <Crown className="h-3 w-3" /> VIP
                        </span>
                      )}
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-muted-foreground bg-secondary/80 px-2.5 py-1 rounded-md">{lesson.duration}</span>
                      {lesson.locked && <Lock className="h-4 w-4 text-accent" />}
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2">{lesson.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{lesson.desc}</p>
                    {lesson.locked ? (
                      <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium">
                        <Crown className="h-3.5 w-3.5" /> Conteúdo VIP (em breve)
                      </span>
                    ) : hasVideo ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/30 text-primary hover:bg-primary/10 gap-2"
                        onClick={() => setActiveVideo(videoId)}
                      >
                        <Play className="h-4 w-4" /> Assistir Aula
                      </Button>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">Vídeo em breve</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Aulas;
