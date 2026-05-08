import apiClient from './apiClient';

export const authService = {
  async login(credentials) {
    if (!credentials.email || !credentials.password) {
      throw new Error('Email and password are required');
    }
    try {
      await apiClient.get('/users/1');
      return { token: 'mock-token', user: { email: credentials.email, name: 'Demo User' } };
    } catch {
      return { token: 'offline-token', user: { email: credentials.email, name: 'Offline Demo User' } };
    }
  },
  logout() {
    return true;
  },
};
