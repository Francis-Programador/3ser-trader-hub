/**
 * API Service Layer
 * Centralizes all HTTP requests and API endpoint management
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.3ser-trader.com';

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

/**
 * Builds URL with query parameters
 */
function buildUrl(endpoint: string, params?: Record<string, string | number | boolean>): string {
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }
  
  return url.toString();
}

/**
 * Generic fetch wrapper with error handling
 */
async function apiCall<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { params, ...fetchOptions } = options;
  const url = buildUrl(endpoint, params);

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
      ...fetchOptions,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(`API call failed for ${endpoint}:`, error);
    throw error;
  }
}

// ============================================
// TRADING RELATED API CALLS
// ============================================

export interface TradeResult {
  id: string;
  date: string;
  profit: number;
  profitPercentage: number;
  description: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: number;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface StudentStats {
  totalStudents: number;
  successRate: number;
  totalOperations: number;
  yearsOfExperience: number;
}

/**
 * Get trading results/performance history
 */
export const tradeApi = {
  getResults: (limit = 10) =>
    apiCall<TradeResult[]>('/trades/results', {
      params: { limit },
      method: 'GET',
    }),

  getResultById: (id: string) =>
    apiCall<TradeResult>(`/trades/results/${id}`, {
      method: 'GET',
    }),
};

/**
 * Get course materials and lessons
 */
export const coursesApi = {
  getModules: () =>
    apiCall<CourseModule[]>('/courses/modules', {
      method: 'GET',
    }),

  getModuleById: (id: string) =>
    apiCall<CourseModule>(`/courses/modules/${id}`, {
      method: 'GET',
    }),
};

/**
 * Get statistics and general info
 */
export const statsApi = {
  getStudentStats: () =>
    apiCall<StudentStats>('/stats/students', {
      method: 'GET',
    }),
};

/**
 * Contact form submission
 */
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactApi = {
  submitContact: (data: ContactForm) =>
    apiCall<{ success: boolean; message: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

/**
 * Newsletter subscription
 */
export const newsletterApi = {
  subscribe: (email: string) =>
    apiCall<{ success: boolean; message: string }>('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),
};

export default {
  tradeApi,
  coursesApi,
  statsApi,
  contactApi,
  newsletterApi,
};
