import { apiClient } from './apiClient';
import type { Document, Summary, StudyPlan } from '../types/models';

export const documentService = {
  list(token?: string) {
    return apiClient<Document[]>('/documents', { token });
  },
  upload(fileName: string, token?: string) {
    return apiClient<Document>('/documents/upload', {
      method: 'POST',
      token,
      body: JSON.stringify({ fileName }),
    });
  },
  getSummary(documentId: string, token?: string) {
    return apiClient<Summary>(`/documents/${documentId}/summary`, { token });
  },
  getStudyPlan(documentId: string, token?: string) {
    return apiClient<StudyPlan>(`/documents/${documentId}/study-plan`, { token });
  },
};
