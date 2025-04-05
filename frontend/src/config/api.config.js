export const API_CONFIG = {
  BASE_URL: 'http://localhost:8090/page',
  TIMEOUT: 10000,
  RESUME: {
    LIST: '/api/resumes',
    CREATE: '/api/resumes',
    UPDATE: '/api/resumes/{id}',
    DELETE: '/api/resumes/{id}',
    GET_BY_ID: '/api/resumes/{id}',
    EXPORT_PDF: '/api/resumes/{id}/pdf'
  },
  AI: {
    SUGGEST: '/api/ai/suggest'
  }
} 