import { apiClient } from './apiClient';
import type { Quiz } from '../types/models';

export const quizService = {
  getQuiz(documentId: string, token?: string) {
    return apiClient<Quiz>(`/documents/${documentId}/quiz`, { token });
  },
};
