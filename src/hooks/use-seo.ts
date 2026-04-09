/**
 * Hook customizado para gerenciar SEO (meta tags)
 * Atualiza o título da página e meta tags
 */

import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  author?: string;
  canonical?: string;
}

const DEFAULT_SEO = {
  title: '3SER Trader Sem Ré - Educação e Trading',
  description:
    'Plataforma educacional de trading com aulas, ferramentas e recursos para traders. Aprenda trading com os melhores profissionais.',
  keywords: 'trading, forex, criptomoedas, educação, aulas, trader',
  ogImage: 'https://3ser-trader.com/og-image.jpg',
  ogUrl: 'https://3ser-trader.com',
  author: '3SER Trader Hub',
};

/**
 * Hook para atualizar tags SEO da página
 * @param seo - Configurações SEO customizadas
 * @example
 * useSEO({
 *   title: 'Minhas Aulas',
 *   description: 'Aprenda os fundamentos do trading'
 * });
 */
export function useSEO(seo: Partial<SEOProps> = {}) {
  const config = { ...DEFAULT_SEO, ...seo };

  useEffect(() => {
    try {
      // Atualizar título da página
      document.title = config.title || DEFAULT_SEO.title;

      // Atualizar meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', config.description || DEFAULT_SEO.description);

      // Atualizar meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', config.keywords || DEFAULT_SEO.keywords);

      // Atualizar meta author
      let metaAuthor = document.querySelector('meta[name="author"]');
      if (!metaAuthor) {
        metaAuthor = document.createElement('meta');
        metaAuthor.setAttribute('name', 'author');
        document.head.appendChild(metaAuthor);
      }
      metaAuthor.setAttribute('content', config.author || DEFAULT_SEO.author);

      // Open Graph tags
      const ogTags = [
        { property: 'og:title', content: config.title },
        { property: 'og:description', content: config.description },
        { property: 'og:image', content: config.ogImage },
        { property: 'og:url', content: config.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: config.title },
        { property: 'twitter:description', content: config.description },
        { property: 'twitter:image', content: config.ogImage },
      ];

      ogTags.forEach(({ property, content }) => {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content || '');
      });

      // Canonical URL
      if (config.canonical) {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
          canonical = document.createElement('link');
          canonical.setAttribute('rel', 'canonical');
          document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', config.canonical);
      }
    } catch (error) {
      // Log silenciosamente para não quebrar a aplicação
      console.warn('SEO hook error:', error);
    }
  }, [seo]);
}

export default useSEO;
