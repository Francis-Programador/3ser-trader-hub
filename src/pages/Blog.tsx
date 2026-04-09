import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

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
    content: `Foi numa terça-feira aparentemente normal. O mercado abriu em tendência, eu acertei as duas primeiras operações e pensei: "Hoje é meu dia." Esse excesso de confiança foi o começo do fim.

Comecei a aumentar o valor das operações sem seguir a gestão. Quando perdi a terceira, quis recuperar na quarta. E na quinta. E na sexta. Quando percebi, tinha perdido 40% de toda a minha banca em menos de 2 horas.

A dor foi enorme. Não pela perda financeira em si, mas por saber que eu tinha descumprido TODAS as regras que eu mesmo tinha criado.

**O que aprendi:**
- Nunca operar no emocional
- Definir um limite de perda diário e RESPEITAR
- Parar depois de 2 perdas consecutivas
- A banca é mais importante que qualquer operação

Esse dia mudou minha forma de operar. Hoje, disciplina vem antes de qualquer setup.`,
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
    content: `A estatística é cruel: cerca de 90% das pessoas que entram no trading perdem dinheiro. Mas por quê?

Depois de 5 anos no mercado e conversando com centenas de traders, identifiquei os padrões mais comuns:

**1. Falta de gestão de banca**
A maioria entra sem saber quanto pode arriscar por operação. Colocam 10%, 20% da banca numa única entrada.

**2. Operar por emoção**
Ganhou? Quer ganhar mais. Perdeu? Quer recuperar. Esse ciclo é o maior destruidor de bancas.

**3. Não ter um plano**
Operar sem regras claras é como dirigir sem GPS. Você até pode chegar a algum lugar, mas provavelmente não será onde queria.

**4. Pular etapas**
Muitos vão direto para conta real sem passar pela demo. Ou pulam o estudo e querem operar só copiando sinais.

**5. Expectativas irreais**
Achar que vai ficar rico em 30 dias. Trading é uma maratona, não uma corrida de 100 metros.

A boa notícia? Você pode estar nos 10% que sobrevivem. Basta ter disciplina, estudar e respeitar o processo.`,
    media: [],
  },
  {
    id: "rotina-operacional",
    title: "Minha rotina operacional: do café ao fechamento",
    excerpt: "Compartilho como organizo meu dia de trading, desde a análise matinal até o registro no diário de operações.",
    date: "2025-03-05",
    readTime: "4 min",
    category: "Experiências",
    content: `Ter uma rotina é essencial para manter a consistência no trading. Aqui está como organizo meu dia:

**6h30 - Acordo e café**
Nada de tela logo cedo. Café, alongamento e mente limpa.

**7h00 - Análise do mercado**
Verifico o calendário econômico, notícias relevantes e identifico os pares mais interessantes.

**8h00 - Abertura da sessão de Londres**
É quando começo a observar. Espero formações claras antes de entrar.

**9h00 - 11h00 - Janela operacional**
Minhas melhores operações acontecem nesse horário. Foco total, sem distrações.

**11h00 - Registro no diário**
Anoto TODAS as operações: entrada, saída, motivo, emoção, resultado. Isso é ouro para evolução.

**Tarde - Estudo e revisão**
Reviso operações passadas, estudo padrões novos e preparo a análise do dia seguinte.

A consistência não vem de uma operação genial. Vem de fazer o básico bem feito, todos os dias.`,
    media: [
      { type: "youtube", url: "", caption: "Um dia na minha rotina" },
    ],
  },
  {
    id: "martingale-armadilha",
    title: "Martingale: a armadilha que parece solução",
    excerpt: "Análise honesta sobre o uso de martingale e por que eu abandonei essa estratégia após meses de teste.",
    date: "2025-02-28",
    readTime: "6 min",
    category: "Erros",
    content: `Martingale: dobrar o valor após cada perda para recuperar tudo na próxima vitória. Na teoria parece perfeito. Na prática, é um caminho para a destruição da banca.

Eu usei martingale por 3 meses. No início, parecia mágico — sempre recuperava. Mas bastou uma sequência de 5 perdas seguidas para perder tudo que tinha ganho no mês.

**O problema matemático:**
- 1ª entrada: R$ 10
- 2ª entrada: R$ 20
- 3ª entrada: R$ 40
- 4ª entrada: R$ 80
- 5ª entrada: R$ 160

Total arriscado: R$ 310 para recuperar R$ 10 de lucro. O risco/retorno é absurdo.

**O que uso no lugar:**
Gestão fixa de 1-2% da banca por operação. Sem recuperação, sem dobrar. Se perdi, aceito e sigo o plano.

Martingale funciona até o dia que não funciona. E nesse dia, você perde tudo.`,
    media: [],
  },
  {
    id: "3-meses-no-lucro",
    title: "3 meses consecutivos no lucro: o que mudou?",
    excerpt: "Depois de muitas perdas, consegui manter consistência. Descubra o que fiz de diferente.",
    date: "2025-02-20",
    readTime: "5 min",
    category: "Resultados",
    content: `Após meses de altos e baixos, finalmente consegui 3 meses consecutivos positivos. Não foi sorte — foi mudança de mentalidade.

**O que mudei:**

**1. Reduzi o número de operações**
De 15-20 por dia para 3-5. Menos é mais quando cada entrada é bem pensada.

**2. Comecei a usar diário de trading**
Registrar cada operação me fez perceber padrões que eu não via antes.

**3. Defini limites rígidos**
Máximo de 2% por operação. Stop diário de 5%. Se bateu, desligo a tela.

**4. Foquei em poucos pares**
Em vez de operar tudo, foquei em EUR/USD e GBP/USD. Conhecer bem 2 pares é melhor que operar mal em 10.

**5. Aceitei as perdas**
Perder faz parte. O que importa é o resultado no final do mês, não de cada operação.

O resultado? +12%, +8%, +15% nos últimos 3 meses. Nada espetacular, mas CONSISTENTE. E consistência é tudo.`,
    media: [
      { type: "image", url: "", caption: "Resultado dos 3 meses" },
    ],
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
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <article className="glass rounded-xl p-6 hover:border-primary/30 transition-all cursor-pointer group mb-6">
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
