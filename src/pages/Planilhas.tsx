import { useState } from "react";
import { Download, FileSpreadsheet, CheckCircle, ArrowRight, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  useScrollReveal();

  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                <FileSpreadsheet className="h-4 w-4" />
                Download Gratuito
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Planilha de <span className="text-gradient-gold">Gestão de Banca</span>
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto text-lg">
                A mesma planilha que uso para controlar todas as minhas operações. Gratuita, completa e pronta para usar.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {/* Features */}
              <div className="md:col-span-2 reveal">
                <h2 className="font-heading font-bold text-xl mb-6">O que inclui:</h2>
                <div className="space-y-4">
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-3 glass rounded-xl p-4">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download card */}
              <div className="md:col-span-3 reveal">
                <div className="glass rounded-2xl p-8 gradient-border">
                  <h3 className="font-heading font-bold text-xl mb-4">Como usar:</h3>
                  <ol className="space-y-3 mb-8">
                    {[
                      "Baixe a planilha e abra no Google Sheets ou Excel",
                      "Preencha seus dados iniciais (capital, risco por operação)",
                      "Registre cada operação na aba correspondente",
                      "Acompanhe sua evolução nos gráficos automáticos",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs font-heading font-bold flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-sm text-muted-foreground pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>

                  {!submitted ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (email) setSubmitted(true);
                      }}
                    >
                      <p className="text-sm text-muted-foreground mb-4">Insira o email para receber o link:</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="email"
                          required
                          maxLength={255}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Seu melhor email"
                          className="flex-1 px-5 py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                        />
                        <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold glow-blue gap-2 rounded-xl">
                          <Download className="h-5 w-5" />
                          Baixar Planilha
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <p className="font-heading font-bold text-lg mb-2">Pronto!</p>
                      <p className="text-muted-foreground text-sm">O link será enviado para <strong className="text-foreground">{email}</strong></p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Planilhas;
