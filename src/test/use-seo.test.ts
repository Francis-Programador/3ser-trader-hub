import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { useSEO } from '@/hooks/use-seo';
import { renderHook } from '@testing-library/react';

describe('useSEO Hook', () => {
  beforeEach(() => {
    // Limpar meta tags antes de cada teste
    document.querySelectorAll('meta').forEach(meta => {
      if (meta.getAttribute('name') !== 'viewport' && meta.getAttribute('charset') !== 'utf-8') {
        meta.remove();
      }
    });
  });

  afterEach(() => {
    // Limpar após cada teste
    document.querySelectorAll('meta[name="description"]').forEach(m => m.remove());
    document.querySelectorAll('meta[name="keywords"]').forEach(m => m.remove());
  });

  it('should set default SEO values', () => {
    renderHook(() => useSEO());

    expect(document.title).toBe('3SER Trader Sem Ré - Educação e Trading');

    const description = document.querySelector('meta[name="description"]');
    expect(description?.getAttribute('content')).toContain('Plataforma educacional de trading');
  });

  it('should set custom SEO values', () => {
    renderHook(() =>
      useSEO({
        title: 'Minhas Aulas',
        description: 'Aprenda trading do zero',
        keywords: 'trading, aulas, educação',
      })
    );

    expect(document.title).toBe('Minhas Aulas');

    const description = document.querySelector('meta[name="description"]');
    expect(description?.getAttribute('content')).toBe('Aprenda trading do zero');

    const keywords = document.querySelector('meta[name="keywords"]');
    expect(keywords?.getAttribute('content')).toBe('trading, aulas, educação');
  });

  it('should create meta tags if they do not exist', () => {
    renderHook(() =>
      useSEO({
        title: 'Test Page',
        description: 'Test Description',
      })
    );

    const tags = document.head.querySelectorAll('meta[name="description"]');
    expect(tags.length).toBeGreaterThan(0);
  });

  it('should update existing meta tags', () => {
    const { rerender } = renderHook(({ seo }) => useSEO(seo), {
      initialProps: {
        seo: { title: 'First Title', description: 'First Description' },
      },
    });

    expect(document.title).toBe('First Title');

    rerender({ seo: { title: 'Second Title', description: 'Second Description' } });

    expect(document.title).toBe('Second Title');
    const description = document.querySelector('meta[name="description"]');
    expect(description?.getAttribute('content')).toBe('Second Description');
  });

  it('should set author meta tag', () => {
    renderHook(() => useSEO({ author: 'João Silva' }));

    const author = document.querySelector('meta[name="author"]');
    expect(author?.getAttribute('content')).toBe('João Silva');
  });

  it('should set Open Graph tags', () => {
    renderHook(() =>
      useSEO({
        title: 'Test Page',
        description: 'Test Description',
        ogImage: 'https://example.com/image.jpg',
        ogUrl: 'https://example.com',
      })
    );

    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle?.getAttribute('content')).toBe('Test Page');

    const ogImage = document.querySelector('meta[property="og:image"]');
    expect(ogImage?.getAttribute('content')).toBe('https://example.com/image.jpg');

    const ogUrl = document.querySelector('meta[property="og:url"]');
    expect(ogUrl?.getAttribute('content')).toBe('https://example.com');
  });

  it('should set canonical URL', () => {
    renderHook(() =>
      useSEO({
        canonical: 'https://example.com/page',
      })
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical?.getAttribute('href')).toBe('https://example.com/page');
  });
});
