import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, X, Calendar, TrendingUp, Image } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HistoryEntry {
  id: string;
  title: string;
  date: string;
  description: string;
  result: string;
  positive: boolean;
  media: { type: "youtube" | "image"; url: string; caption?: string }[];
}

function getYouTubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : url;
}

function getDropboxDirectUrl(url: string): string {
  if (url.includes("dropbox.com")) {
    return url.replace("dl=0", "raw=1").replace("www.dropbox.com", "dl.dropboxusercontent.com");
  }
  return url;
}

// Dados de exemplo — substitua pelos seus reais
export const historyEntries: HistoryEntry[] = [
  {
    id: "1",
    title: "Semana 1 - Janeiro 2024",
    date: "08/01/2024",
    description: "Primeira semana do ano com foco em gestão de banca. Operações conservadoras seguindo a tendência do mercado. Destaque para a sequência de acertos no EUR/USD durante a sessão de Londres.",
    result: "+R$ 320",
    positive: true,
    media: [
      { type: "youtube", url: "", caption: "Análise da semana" },
      { type: "image", url: "", caption: "Print do resultado" },
    ],
  },
  {
    id: "2",
    title: "Semana 2 - Janeiro 2024",
    date: "15/01/2024",
    description: "Semana mais volátil, com operações mistas. Perda controlada no início, recuperação no meio da semana com operações em suporte e resistência.",
    result: "-R$ 80",
    positive: false,
    media: [
      { type: "image", url: "", caption: "Resultado da semana" },
    ],
  },
  {
    id: "3",
    title: "Semana 3 - Janeiro 2024",
    date: "22/01/2024",
    description: "Excelente semana com aproveitamento de 78%. Estratégia de tendência aplicada no GBP/USD e USD/JPY com ótimos resultados.",
    result: "+R$ 450",
    positive: true,
    media: [
      { type: "youtube", url: "", caption: "Operações ao vivo" },
    ],
  },
];

const ResultadoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const entry = historyEntries.find((e) => e.id === id);

  if (!entry) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container text-center">
            <h1 className="text-2xl font-heading font-bold mb-4">Registro não encontrado</h1>
            <Link to="/resultados">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Voltar aos Resultados
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Video modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors">
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video rounded-xl overflow-hidden border border-border">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Vídeo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Back button */}
          <Link to="/resultados" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Voltar aos Resultados
          </Link>

          {/* Header */}
          <div className="glass rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
              <Calendar className="h-4 w-4" />
              {entry.date}
            </div>
            <h1 className="text-3xl font-heading font-bold mb-4">{entry.title}</h1>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
              entry.positive
                ? "bg-primary/10 text-primary border border-primary/20"
                : "bg-destructive/10 text-destructive border border-destructive/20"
            }`}>
              <TrendingUp className="h-4 w-4" />
              {entry.result}
            </div>
          </div>

          {/* Description */}
          <div className="glass rounded-xl p-6 mb-8">
            <h2 className="font-heading font-bold text-xl mb-4">Descrição</h2>
            <p className="text-muted-foreground leading-relaxed">{entry.description}</p>
          </div>

          {/* Media */}
          {entry.media.length > 0 && (
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-xl">Mídia</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {entry.media.map((item, i) => {
                  if (item.type === "youtube" && item.url) {
                    const videoId = getYouTubeId(item.url);
                    const hasVideo = videoId.length === 11;
                    if (!hasVideo) {
                      return (
                        <div key={i} className="glass rounded-xl p-6 flex items-center gap-3">
                          <Play className="h-6 w-6 text-muted-foreground" />
                          <span className="text-muted-foreground text-sm italic">
                            {item.caption || "Vídeo em breve"}
                          </span>
                        </div>
                      );
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => setActiveVideo(videoId)}
                        className="glass rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <div className="relative aspect-video">
                          <img
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            alt={item.caption || "Vídeo"}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center glow-green group-hover:scale-110 transition-transform">
                              <Play className="h-6 w-6 text-primary-foreground ml-1" />
                            </div>
                          </div>
                        </div>
                        {item.caption && (
                          <div className="p-3">
                            <span className="text-sm text-muted-foreground">{item.caption}</span>
                          </div>
                        )}
                      </button>
                    );
                  }

                  if (item.type === "image" && item.url) {
                    const imgUrl = getDropboxDirectUrl(item.url);
                    return (
                      <div key={i} className="glass rounded-xl overflow-hidden">
                        <div className="aspect-video">
                          <img
                            src={imgUrl}
                            alt={item.caption || "Imagem"}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        {item.caption && (
                          <div className="p-3">
                            <span className="text-sm text-muted-foreground">{item.caption}</span>
                          </div>
                        )}
                      </div>
                    );
                  }

                  // No URL provided
                  return (
                    <div key={i} className="glass rounded-xl p-6 flex items-center gap-3">
                      <Image className="h-6 w-6 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm italic">
                        {item.caption || "Mídia em breve"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ResultadoDetalhe;
