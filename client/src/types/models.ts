export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Document {
  id: string;
  title: string;
  uploadedAt: string;
  pageCount?: number;
}

export interface Summary {
  id: string;
  documentId: string;
  content: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  answer?: string;
}

export interface Quiz {
  id: string;
  documentId: string;
  questions: QuizQuestion[];
}

export interface StudyPlanItem {
  id: string;
  topic: string;
  durationMinutes: number;
}

export interface StudyPlan {
  id: string;
  documentId?: string;
  items: StudyPlanItem[];
}
