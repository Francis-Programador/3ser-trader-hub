import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary para capturar erros de renderização
 * Evita página totalmente branca quando há erro
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-md text-center">
            <h1 className="text-3xl font-bold text-destructive mb-4">Algo deu errado!</h1>
            <p className="text-muted-foreground mb-6">
              Desculpe, houve um erro ao carregar a página. Tente recarregar.
            </p>
            <div className="bg-card p-4 rounded-lg mb-6 text-left text-sm">
              <p className="text-muted-foreground break-words">
                {this.state.error?.message || 'Erro desconhecido'}
              </p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
