import axios from 'axios';

// The backend URL where the API lives
// When running locally, it defaults to localhost:3000
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const printApi = {
  uploadFile: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post('/print/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  
  getPrintJob: async (code) => {
    const response = await api.get(`/print/${code}`);
    return response.data;
  },
  
  deletePrintJob: async (code) => {
    const response = await api.delete(`/print/${code}`);
    return response.data;
  },
  
  getPreviewUrl: (code) => `${API_BASE_URL}/print/${code}/preview`,
  getDownloadUrl: (code) => `${API_BASE_URL}/print/${code}/download`,
};
