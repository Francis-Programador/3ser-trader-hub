import { Video, Camera, MessageCircle, ExternalLink, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const socials = [
  {
    icon: Video,
    name: "YouTube",
    desc: "Aulas completas, análises ao vivo e diário de trading em vídeo.",
    handle: "@3sertrader",
    href: "#",
    gradient: "from-red-500/20 to-red-600/5",
    borderColor: "hover:border-red-500/40",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: Camera,
    name: "Instagram",
    desc: "Conteúdo diário, stories com operações e motivação para traders.",
    handle: "@3sertrader",
    href: "#",
    gradient: "from-pink-500/20 to-purple-500/5",
    borderColor: "hover:border-pink-500/40",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    desc: "Entre no grupo da comunidade para trocar ideias e tirar dúvidas.",
    handle: "Grupo 3SER",
    href: "#",
    gradient: "from-green-500/20 to-green-600/5",
    borderColor: "hover:border-green-500/40",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
  },
];

const Redes = () => {
  useScrollReveal();

  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              Comunidade
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Redes <span className="text-gradient-gold">Sociais</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              Me acompanhe nas redes para conteúdo diário e atualizações em tempo real.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {socials.map((social, i) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal flex items-center gap-6 rounded-2xl p-8 border border-border/50 bg-gradient-to-r ${social.gradient} ${social.borderColor} transition-all duration-300 card-hover`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${social.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <social.icon className={`h-8 w-8 ${social.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">{social.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{social.desc}</p>
                  <span className="text-xs font-heading font-semibold text-muted-foreground">{social.handle}</span>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Redes;
