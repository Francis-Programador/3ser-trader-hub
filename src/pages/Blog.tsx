import { Calendar, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const posts = [
  {
    title: "O dia que perdi 40% da banca — e o que aprendi",
    excerpt: "Nem tudo são flores no trading. Neste post conto como um dia de descontrole emocional me custou caro e as lições que tirei.",
    date: "2025-03-15",
    readTime: "5 min",
    category: "Mentalidade",
  },
  {
    title: "Por que 90% dos traders perdem dinheiro",
    excerpt: "Entenda os erros mais comuns que fazem a maioria falhar e como você pode evitar cair nas mesmas armadilhas.",
    date: "2025-03-10",
    readTime: "7 min",
    category: "Aprendizados",
  },
  {
    title: "Minha rotina operacional: do café ao fechamento",
    excerpt: "Compartilho como organizo meu dia de trading, desde a análise matinal até o registro no diário de operações.",
    date: "2025-03-05",
    readTime: "4 min",
    category: "Experiências",
  },
  {
    title: "Martingale: a armadilha que parece solução",
    excerpt: "Análise honesta sobre o uso de martingale e por que eu abandonei essa estratégia após meses de teste.",
    date: "2025-02-28",
    readTime: "6 min",
    category: "Erros",
  },
  {
    title: "3 meses consecutivos no lucro: o que mudou?",
    excerpt: "Depois de muitas perdas, consegui manter consistência. Descubra o que fiz de diferente.",
    date: "2025-02-20",
    readTime: "5 min",
    category: "Resultados",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4">
              Histórias da <span className="text-gradient-gold">Jornada</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Experiências reais, erros, acertos e a mentalidade que faz a diferença no trading.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {posts.map((post, i) => (
              <article
                key={i}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
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
                <h2 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                  Ler mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
