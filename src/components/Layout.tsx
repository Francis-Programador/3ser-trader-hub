import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, TrendingUp, Crown } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Cursos", path: "/aulas" },
  { label: "Planilhas", path: "/planilhas" },
  { label: "Histórias", path: "/blog" },
  { label: "Resultados", path: "/resultados" },
  { label: "Contato", path: "/contato" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-lg shadow-background/50" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:glow-green transition-all">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <span className="font-heading font-bold text-lg">
              3SER <span className="text-gradient-neon hidden sm:inline">Trader Sem Ré</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/vip"
              className="ml-2 px-4 py-2 rounded-lg text-sm font-heading font-semibold bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all flex items-center gap-1.5"
            >
              <Crown className="h-4 w-4" />
              Área VIP
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground rounded-lg hover:bg-secondary/50 transition-colors"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden glass-strong border-t border-border animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-6 py-3.5 text-sm font-medium transition-colors border-b border-border/30 ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/vip"
              className="block px-6 py-3.5 text-sm font-heading font-semibold text-accent"
            >
              <span className="flex items-center gap-2">
                <Crown className="h-4 w-4" /> Área VIP
              </span>
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-1 pt-16">{children}</main>

      <footer className="border-t border-border bg-card/80 py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <span className="font-heading font-bold">3SER Trader Sem Ré</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Jornada real no trading. Sem ilusões, sem atalhos. Disciplina e consistência acima de tudo.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Navegação</h4>
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Contato</h4>
              <p className="text-sm text-muted-foreground mb-2">3ser.tradersemre@gmail.com</p>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center">
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} 3SER Trader Sem Ré. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Layout;
