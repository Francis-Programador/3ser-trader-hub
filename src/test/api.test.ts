import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  tradeApi,
  coursesApi,
  statsApi,
  contactApi,
  newsletterApi,
  type TradeResult,
  type CourseModule,
  type StudentStats,
} from '@/services/api';

describe('API Services', () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    globalThis.fetch = fetchMock as any;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('tradeApi', () => {
    it('should fetch trading results', async () => {
      const mockResults: TradeResult[] = [
        {
          id: '1',
          date: '2026-04-09',
          profit: 1500,
          profitPercentage: 15,
          description: 'Operação bem-sucedida',
        },
      ];

      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResults,
      });

      const results = await tradeApi.getResults(10);
      expect(results).toEqual(mockResults);
      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/trades/results'),
        expect.any(Object)
      );
    });

    it('should fetch result by ID', async () => {
      const mockResult: TradeResult = {
        id: '1',
        date: '2026-04-09',
        profit: 1500,
        profitPercentage: 15,
        description: 'Operação bem-sucedida',
      };

      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResult,
      });

      const result = await tradeApi.getResultById('1');
      expect(result).toEqual(mockResult);
    });
  });

  describe('coursesApi', () => {
    it('should fetch course modules', async () => {
      const mockModules: CourseModule[] = [
        {
          id: '1',
          title: 'Introdução ao Trading',
          description: 'Conceitos básicos',
          videoUrl: 'https://example.com/video1',
          duration: 45,
          level: 'beginner',
        },
      ];

      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: async () => mockModules,
      });

      const modules = await coursesApi.getModules();
      expect(modules).toEqual(mockModules);
    });

    it('should fetch module by ID', async () => {
      const mockModule: CourseModule = {
        id: '1',
        title: 'Introdução ao Trading',
        description: 'Conceitos básicos',
        videoUrl: 'https://example.com/video1',
        duration: 45,
        level: 'beginner',
      };

      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: async () => mockModule,
      });

      const module = await coursesApi.getModuleById('1');
      expect(module).toEqual(mockModule);
    });
  });

  describe('statsApi', () => {
    it('should fetch student statistics', async () => {
      const mockStats: StudentStats = {
        totalStudents: 500,
        successRate: 72,
        totalOperations: 1200,
        yearsOfExperience: 5,
      };

      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: async () => mockStats,
      });

      const stats = await statsApi.getStudentStats();
      expect(stats).toEqual(mockStats);
      expect(stats.totalStudents).toBe(500);
      expect(stats.successRate).toBe(72);
    });
  });

  describe('contactApi', () => {
    it('should submit contact form', async () => {
      const mockResponse = { success: true, message: 'Email enviado com sucesso' };
      const contactData = {
        name: 'João Silva',
        email: 'joao@example.com',
        subject: 'Dúvida sobre trading',
        message: 'Gostaria de saber mais sobre...',
      };

      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await contactApi.submitContact(contactData);
      expect(result).toEqual(mockResponse);
      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/contact'),
        expect.objectContaining({
          method: 'POST',
        })
      );
    });
  });

  describe('newsletterApi', () => {
    it('should subscribe to newsletter', async () => {
      const mockResponse = { success: true, message: 'Inscrito com sucesso' };
      const email = 'subscriber@example.com';

      fetchMock.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await newsletterApi.subscribe(email);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('Error handling', () => {
    it('should throw error on API failure', async () => {
      fetchMock.mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      });

      await expect(statsApi.getStudentStats()).rejects.toThrow();
    });

    it('should handle network errors', async () => {
      fetchMock.mockRejectedValueOnce(new Error('Network error'));

      await expect(tradeApi.getResults()).rejects.toThrow();
    });
  });
});
