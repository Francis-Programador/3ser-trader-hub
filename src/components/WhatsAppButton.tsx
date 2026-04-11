import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5500000000000"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 pulse-ring"
    aria-label="Contato WhatsApp"
  >
    <MessageCircle className="h-6 w-6 text-white" />
  </a>
);

export default WhatsAppButton;
