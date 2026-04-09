import { useState } from "react";
import { Mail, MessageCircle, Send, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Contato = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

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
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4">
              Entre em <span className="text-gradient-neon">Contato</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Dúvidas, sugestões ou parcerias? Fale comigo diretamente.
            </p>
          </div>

          <div className="max-w-2xl mx-auto grid md:grid-cols-5 gap-8">
            {/* Quick links */}
            <div className="md:col-span-2 space-y-4">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 flex items-center gap-4 hover:border-green-500/30 transition-all"
              >
                <MessageCircle className="h-8 w-8 text-green-500" />
                <div>
                  <div className="font-heading font-bold text-sm">WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Resposta rápida</div>
                </div>
              </a>
              <div className="glass rounded-xl p-5 flex items-center gap-4">
                <Mail className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-heading font-bold text-sm">Email</div>
                  <div className="text-xs text-muted-foreground">3ser.tradersemre@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {!sent ? (
                <form onSubmit={handleSubmit} className="glass rounded-xl p-6 space-y-4">
                  <input
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    required
                    maxLength={255}
                    placeholder="Seu email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    placeholder="Sua mensagem"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold glow-green gap-2"
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    {loading ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              ) : (
                <div className="glass rounded-xl p-8 text-center">
                  <Send className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-2">Mensagem enviada!</h3>
                  <p className="text-muted-foreground text-sm">Responderei o mais breve possível.</p>
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
