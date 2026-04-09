import { useState } from "react";
import { Download, FileSpreadsheet, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const features = [
  "Controle de banca diário e mensal",
  "Cálculo automático de stop loss e take profit",
  "Registro de todas as operações",
  "Gráficos de evolução do capital",
  "Relatórios de desempenho",
  "100% gratuita e editável",
];

const Planilhas = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
                <FileSpreadsheet className="h-4 w-4" />
                Planilha de Gestão
              </div>
              <h1 className="text-4xl font-heading font-bold mb-4">
                Planilha de <span className="text-gradient-gold">Gestão de Banca</span>
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                A mesma planilha que uso para controlar todas as minhas operações. Gratuita, completa e pronta para usar.
              </p>
            </div>

            <div className="glass rounded-xl p-8 mb-8">
              <h2 className="font-heading font-bold text-xl mb-6">O que está incluso:</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading font-bold mb-2">Como usar:</h3>
              <ol className="list-decimal list-inside text-muted-foreground text-sm space-y-2 mb-8">
                <li>Baixe a planilha e abra no Google Sheets ou Excel</li>
                <li>Preencha seus dados iniciais (capital, risco por operação)</li>
                <li>Registre cada operação na aba correspondente</li>
                <li>Acompanhe sua evolução nos gráficos automáticos</li>
              </ol>

              {!submitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) {
                      setSubmitted(true);
                    }
                  }}
                >
                  <p className="text-sm text-muted-foreground mb-4">Insira seu email para receber o link de download:</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor email"
                      className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold glow-gold gap-2">
                      <Download className="h-5 w-5" />
                      Baixar Planilha
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="font-heading font-bold text-lg mb-2">Pronto!</p>
                  <p className="text-muted-foreground text-sm">O link de download será enviado para <strong className="text-foreground">{email}</strong></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Planilhas;
