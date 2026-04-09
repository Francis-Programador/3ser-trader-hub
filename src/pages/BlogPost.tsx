import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Play, X, Image } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { posts } from "./Blog";

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

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container text-center">
            <h1 className="text-2xl font-heading font-bold mb-4">Post não encontrado</h1>
            <Link to="/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Voltar ao Blog
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  // Parse content paragraphs
  const paragraphs = post.content.split("\n\n");

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
        <div className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Voltar ao Blog
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {new Date(post.date).toLocaleDateString("pt-BR")}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold">{post.title}</h1>
          </div>

          {/* Content */}
          <div className="glass rounded-xl p-6 md:p-8 mb-8">
            {paragraphs.map((p, i) => {
              if (p.startsWith("**") && p.endsWith("**")) {
                return <h3 key={i} className="font-heading font-bold text-lg mt-6 mb-2">{p.replace(/\*\*/g, "")}</h3>;
              }
              if (p.startsWith("- ")) {
                const items = p.split("\n").filter(Boolean);
                return (
                  <ul key={i} className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^- /, "")}</li>
                    ))}
                  </ul>
                );
              }
              // Handle inline bold
              const parts = p.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {parts.map((part, j) =>
                    part.startsWith("**") && part.endsWith("**")
                      ? <strong key={j} className="text-foreground font-semibold">{part.replace(/\*\*/g, "")}</strong>
                      : part
                  )}
                </p>
              );
            })}
          </div>

          {/* Media */}
          {post.media && post.media.length > 0 && (
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-xl">Mídia</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {post.media.map((item, i) => {
                  if (item.type === "youtube" && item.url) {
                    const videoId = getYouTubeId(item.url);
                    const hasVideo = videoId.length === 11;
                    if (!hasVideo) {
                      return (
                        <div key={i} className="glass rounded-xl p-6 flex items-center gap-3">
                          <Play className="h-6 w-6 text-muted-foreground" />
                          <span className="text-muted-foreground text-sm italic">{item.caption || "Vídeo em breve"}</span>
                        </div>
                      );
                    }
                    return (
                      <button key={i} onClick={() => setActiveVideo(videoId)} className="glass rounded-xl overflow-hidden group cursor-pointer">
                        <div className="relative aspect-video">
                          <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={item.caption || "Vídeo"} className="w-full h-full object-cover" loading="lazy" />
                          <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center glow-green group-hover:scale-110 transition-transform">
                              <Play className="h-6 w-6 text-primary-foreground ml-1" />
                            </div>
                          </div>
                        </div>
                        {item.caption && <div className="p-3"><span className="text-sm text-muted-foreground">{item.caption}</span></div>}
                      </button>
                    );
                  }
                  if (item.type === "image" && item.url) {
                    const imgUrl = getDropboxDirectUrl(item.url);
                    return (
                      <div key={i} className="glass rounded-xl overflow-hidden">
                        <div className="aspect-video">
                          <img src={imgUrl} alt={item.caption || "Imagem"} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        {item.caption && <div className="p-3"><span className="text-sm text-muted-foreground">{item.caption}</span></div>}
                      </div>
                    );
                  }
                  return (
                    <div key={i} className="glass rounded-xl p-6 flex items-center gap-3">
                      <Image className="h-6 w-6 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm italic">{item.caption || "Mídia em breve"}</span>
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

export default BlogPost;
