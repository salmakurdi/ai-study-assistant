import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import UploadPDFPage from '../pages/UploadPDF/UploadPDFPage';
import SummaryPage from '../pages/Summary/SummaryPage';
import QuizPage from '../pages/Quiz/QuizPage';
import StudyPlanPage from '../pages/StudyPlan/StudyPlanPage';

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'upload', element: <UploadPDFPage /> },
      { path: 'summary', element: <SummaryPage /> },
      { path: 'quiz', element: <QuizPage /> },
      { path: 'study-plan', element: <StudyPlanPage /> },
    ],
  },
]);
