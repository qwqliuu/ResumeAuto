export const API_CONFIG = {
  BASE_URL: process.env.VUE_APP_API_BASE_URL,
  TIMEOUT: parseInt(process.env.VUE_APP_API_TIMEOUT),
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