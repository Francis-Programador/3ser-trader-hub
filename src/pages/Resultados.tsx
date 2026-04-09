import { TrendingUp, TrendingDown, Target, BarChart3, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { historyEntries } from "./ResultadoDetalhe";

const evolutionData = [
  { month: "Jan", capital: 1000 },
  { month: "Fev", capital: 1120 },
  { month: "Mar", capital: 980 },
  { month: "Abr", capital: 1250 },
  { month: "Mai", capital: 1180 },
  { month: "Jun", capital: 1420 },
  { month: "Jul", capital: 1380 },
  { month: "Ago", capital: 1600 },
  { month: "Set", capital: 1550 },
  { month: "Out", capital: 1820 },
  { month: "Nov", capital: 1750 },
  { month: "Dez", capital: 2100 },
];

const metrics = [
  { label: "Taxa de Acerto", value: "72%", icon: Target, trend: "+3%", positive: true },
  { label: "Ganho Total", value: "R$ 1.100", icon: TrendingUp, trend: "+110%", positive: true },
  { label: "Maior Perda", value: "-R$ 180", icon: TrendingDown, trend: "Controlada", positive: false },
  { label: "Total Operações", value: "1.247", icon: BarChart3, trend: "12 meses", positive: true },
];

const Resultados = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4">
              Resultados <span className="text-gradient-neon">Transparentes</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Sem maquiar números. Aqui você vê a evolução real, com ganhos e perdas.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {metrics.map((m) => (
              <div key={m.label} className="glass rounded-xl p-5 text-center">
                <m.icon className={`h-8 w-8 mx-auto mb-3 ${m.positive ? "text-primary" : "text-destructive"}`} />
                <div className="text-2xl font-heading font-bold">{m.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                <div className={`text-xs mt-2 font-medium ${m.positive ? "text-primary" : "text-destructive"}`}>
                  {m.trend}
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="glass rounded-xl p-6 mb-12">
            <h2 className="font-heading font-bold text-xl mb-6">Evolução do Capital (R$)</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={evolutionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 15%)" />
                  <XAxis dataKey="month" stroke="hsl(0, 0%, 55%)" fontSize={12} />
                  <YAxis stroke="hsl(0, 0%, 55%)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(0, 0%, 7%)",
                      border: "1px solid hsl(0, 0%, 15%)",
                      borderRadius: "8px",
                      color: "hsl(0, 0%, 92%)",
                    }}
                    formatter={(value: number) => [`R$ ${value}`, "Capital"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="capital"
                    stroke="hsl(145, 100%, 50%)"
                    strokeWidth={3}
                    dot={{ fill: "hsl(145, 100%, 50%)", strokeWidth: 0, r: 4 }}
                    activeDot={{ r: 6, fill: "hsl(145, 100%, 50%)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Histórico */}
          <div className="mb-8">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Histórico <span className="text-gradient-gold">Detalhado</span>
            </h2>
            <div className="space-y-4">
              {historyEntries.map((entry) => (
                <div key={entry.id} className="glass rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {entry.date}
                    </div>
                    <h3 className="font-heading font-bold text-lg">{entry.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{entry.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      entry.positive
                        ? "bg-primary/10 text-primary"
                        : "bg-destructive/10 text-destructive"
                    }`}>
                      {entry.result}
                    </span>
                    <Link to={`/resultados/${entry.id}`}>
                      <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 gap-2">
                        Ver mais <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            * Dados baseados em operações reais documentadas. Resultados passados não garantem resultados futuros.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Resultados;
