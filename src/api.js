import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://prerna-backend.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Auth
export const login = (email, password) => api.post('/auth/login', { email, password });

// Gallery
export const getGallery = () => api.get('/gallery');
export const createGalleryItem = (data) => api.post('/gallery', data, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
export const updateGalleryItem = (id, data) => api.put(`/gallery/${id}`, data, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
export const deleteGalleryItem = (id) => api.delete(`/gallery/${id}`);

// Notices
export const getNotices = () => api.get('/notices');
export const createNotice = (data) => api.post('/notices', data);
export const updateNotice = (id, data) => api.put(`/notices/${id}`, data);
export const deleteNotice = (id) => api.delete(`/notices/${id}`);

// Careers
export const getCareers = () => api.get('/careers');
export const createCareer = (data) => api.post('/careers', data);
export const updateCareer = (id, data) => api.put(`/careers/${id}`, data);
export const deleteCareer = (id) => api.delete(`/careers/${id}`);

// Blogs
export const getBlogs = () => api.get('/blogs');
export const getBlogBySlug = (slug) => api.get(`/blogs/${slug}`);
export const createBlog = (data) => api.post('/blogs', data, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
export const updateBlog = (id, data) => api.put(`/blogs/${id}`, data, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
export const deleteBlog = (id) => api.delete(`/blogs/${id}`);

export default api;