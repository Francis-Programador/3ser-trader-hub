import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  media?: { type: "youtube" | "image"; url: string; caption?: string }[];
}

export const posts: BlogPost[] = [
  {
    id: "perdi-40-da-banca",
    title: "O dia que perdi 40% da banca — e o que aprendi",
    excerpt: "Nem tudo são flores no trading. Neste post conto como um dia de descontrole emocional me custou caro e as lições que tirei.",
    date: "2025-03-15",
    readTime: "5 min",
    category: "Mentalidade",
    content: `Foi numa terça-feira aparentemente normal. O mercado abriu em tendência, eu acertei as duas primeiras operações e pensei: "Hoje é meu dia." Esse excesso de confiança foi o começo do fim.\n\nComecei a aumentar o valor das operações sem seguir a gestão. Quando perdi a terceira, quis recuperar na quarta. E na quinta. E na sexta. Quando percebi, tinha perdido 40% de toda a minha banca em menos de 2 horas.\n\nA dor foi enorme. Não pela perda financeira em si, mas por saber que eu tinha descumprido TODAS as regras que eu mesmo tinha criado.\n\n**O que aprendi:**\n- Nunca operar no emocional\n- Definir um limite de perda diário e RESPEITAR\n- Parar depois de 2 perdas consecutivas\n- A banca é mais importante que qualquer operação\n\nEsse dia mudou minha forma de operar. Hoje, disciplina vem antes de qualquer setup.`,
    media: [
      { type: "youtube", url: "", caption: "Vídeo sobre o dia da perda" },
      { type: "image", url: "", caption: "Print do diário de operações" },
    ],
  },
  {
    id: "90-por-cento-perdem",
    title: "Por que 90% dos traders perdem dinheiro",
    excerpt: "Entenda os erros mais comuns que fazem a maioria falhar e como você pode evitar cair nas mesmas armadilhas.",
    date: "2025-03-10",
    readTime: "7 min",
    category: "Aprendizados",
    content: `A estatística é cruel: cerca de 90% das pessoas que entram no trading perdem dinheiro. Mas por quê?\n\nDepois de 5 anos no mercado e conversando com centenas de traders, identifiquei os padrões mais comuns:\n\n**1. Falta de gestão de banca**\nA maioria entra sem saber quanto pode arriscar por operação.\n\n**2. Operar por emoção**\nGanhou? Quer ganhar mais. Perdeu? Quer recuperar.\n\n**3. Não ter um plano**\nOperar sem regras claras é como dirigir sem GPS.\n\n**4. Pular etapas**\nMuitos vão direto para conta real sem passar pela demo.\n\n**5. Expectativas irreais**\nAchar que vai ficar rico em 30 dias.\n\nA boa notícia? Você pode estar nos 10% que sobrevivem.`,
    media: [],
  },
  {
    id: "rotina-operacional",
    title: "Minha rotina operacional: do café ao fechamento",
    excerpt: "Compartilho como organizo meu dia de trading, desde a análise matinal até o registro no diário de operações.",
    date: "2025-03-05",
    readTime: "4 min",
    category: "Experiências",
    content: `Ter uma rotina é essencial para manter a consistência no trading.\n\n**6h30 - Acordo e café**\nNada de tela logo cedo. Café, alongamento e mente limpa.\n\n**7h00 - Análise do mercado**\nVerifico o calendário econômico e notícias relevantes.\n\n**8h00 - Abertura da sessão de Londres**\nÉ quando começo a observar. Espero formações claras.\n\n**9h00 - 11h00 - Janela operacional**\nMinhas melhores operações acontecem nesse horário.\n\n**11h00 - Registro no diário**\nAnoto TODAS as operações.\n\nA consistência não vem de uma operação genial. Vem de fazer o básico bem feito, todos os dias.`,
    media: [{ type: "youtube", url: "", caption: "Um dia na minha rotina" }],
  },
  {
    id: "martingale-armadilha",
    title: "Martingale: a armadilha que parece solução",
    excerpt: "Análise honesta sobre o uso de martingale e por que eu abandonei essa estratégia após meses de teste.",
    date: "2025-02-28",
    readTime: "6 min",
    category: "Erros",
    content: `Martingale: dobrar o valor após cada perda para recuperar tudo na próxima vitória. Na teoria parece perfeito. Na prática, é um caminho para a destruição da banca.\n\nEu usei martingale por 3 meses. No início, parecia mágico. Mas bastou uma sequência de 5 perdas seguidas para perder tudo.\n\n**O que uso no lugar:**\nGestão fixa de 1-2% da banca por operação. Sem recuperação, sem dobrar.\n\nMartingale funciona até o dia que não funciona. E nesse dia, você perde tudo.`,
    media: [],
  },
  {
    id: "3-meses-no-lucro",
    title: "3 meses consecutivos no lucro: o que mudou?",
    excerpt: "Depois de muitas perdas, consegui manter consistência. Descubra o que fiz de diferente.",
    date: "2025-02-20",
    readTime: "5 min",
    category: "Resultados",
    content: `Após meses de altos e baixos, finalmente consegui 3 meses consecutivos positivos.\n\n**O que mudei:**\n1. Reduzi operações de 15-20 para 3-5 por dia\n2. Comecei a usar diário de trading\n3. Defini limites rígidos (2% por operação, 5% stop diário)\n4. Foquei em poucos pares (EUR/USD e GBP/USD)\n5. Aceitei as perdas\n\nO resultado? +12%, +8%, +15% nos últimos 3 meses. Nada espetacular, mas CONSISTENTE.`,
    media: [{ type: "image", url: "", caption: "Resultado dos 3 meses" }],
  },
];

const categoryColors: Record<string, string> = {
  Mentalidade: "bg-accent/10 text-accent",
  Aprendizados: "bg-primary/10 text-primary",
  Experiências: "bg-primary/10 text-primary",
  Erros: "bg-destructive/10 text-destructive",
  Resultados: "bg-primary/10 text-primary",
};

const Blog = () => {
  useScrollReveal();

  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Diário do Trader
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Histórias da <span className="text-gradient-gold">Jornada</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              Experiências reais, erros, acertos e a mentalidade que faz a diferença.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {posts.map((post, i) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <article
                  className="reveal glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 cursor-pointer group card-hover mb-6"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[post.category] || "bg-secondary text-muted-foreground"}`}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-heading font-semibold group-hover:gap-3 transition-all">
                    Ler mais <ArrowRight className="h-4 w-4" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
