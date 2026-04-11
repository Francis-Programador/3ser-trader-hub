import { useState } from "react";
import { Mail, MessageCircle, Send, Loader2, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contato = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/3ser.tradersemre@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Nova mensagem de ${form.name} - 3SER Trader`,
        }),
      });
      setSent(true);
    } catch {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />

        <div className="container relative">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Send className="h-4 w-4" />
              Fale Connosco
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Entre em <span className="text-gradient-neon">Contato</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              Dúvidas, sugestões ou parcerias? Fale comigo diretamente.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-5 gap-8">
            {/* Quick links */}
            <div className="md:col-span-2 space-y-4 reveal">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-green-500/30 transition-all card-hover block"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <div className="font-heading font-bold text-sm">WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Resposta rápida</div>
                </div>
              </a>
              <div className="glass rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-heading font-bold text-sm">Email</div>
                  <div className="text-xs text-muted-foreground break-all">3ser.tradersemre@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 reveal">
              {!sent ? (
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-4">
                  <input
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Teu nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                  <input
                    type="email"
                    required
                    maxLength={255}
                    placeholder="Teu email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    placeholder="Tua mensagem"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold glow-green gap-2 h-12 rounded-xl"
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    {loading ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              ) : (
                <div className="glass rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Mensagem enviada!</h3>
                  <p className="text-muted-foreground">Responderei o mais breve possível.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
