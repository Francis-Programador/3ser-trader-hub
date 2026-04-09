import { Youtube, Instagram, MessageCircle, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const socials = [
  {
    icon: Youtube,
    name: "YouTube",
    desc: "Aulas completas, análises ao vivo e diário de trading em vídeo.",
    handle: "@3sertrader",
    href: "#",
    color: "bg-red-500/10 border-red-500/20 hover:border-red-500/50 text-red-400",
    iconColor: "text-red-500",
  },
  {
    icon: Instagram,
    name: "Instagram",
    desc: "Conteúdo diário, stories com operações e motivação para traders.",
    handle: "@3sertrader",
    href: "#",
    color: "bg-pink-500/10 border-pink-500/20 hover:border-pink-500/50 text-pink-400",
    iconColor: "text-pink-500",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    desc: "Entre no grupo da comunidade para trocar ideias e tirar dúvidas.",
    handle: "Grupo 3SER",
    href: "#",
    color: "bg-green-500/10 border-green-500/20 hover:border-green-500/50 text-green-400",
    iconColor: "text-green-500",
  },
];

const Redes = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4">
              Redes <span className="text-gradient-gold">Sociais</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Me acompanhe nas redes para conteúdo diário e atualizações em tempo real.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-6 rounded-xl p-6 border transition-all ${social.color}`}
              >
                <div className="flex-shrink-0">
                  <social.icon className={`h-12 w-12 ${social.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-lg text-foreground">{social.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{social.desc}</p>
                  <span className="text-xs font-medium">{social.handle}</span>
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
