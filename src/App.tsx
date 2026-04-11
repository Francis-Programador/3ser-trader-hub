import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import Aulas from "./pages/Aulas";
import Planilhas from "./pages/Planilhas";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Resultados from "./pages/Resultados";
import ResultadoDetalhe from "./pages/ResultadoDetalhe";
import Redes from "./pages/Redes";
import Contato from "./pages/Contato";
import Vip from "./pages/Vip";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/aulas" element={<Aulas />} />
            <Route path="/planilhas" element={<Planilhas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/resultados/:id" element={<ResultadoDetalhe />} />
            <Route path="/redes" element={<Redes />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
