import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { routes } from './routes';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8"> 
        <Routes>{routes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)}</Routes>
      </main>
      <Footer />
    </div>
  );
}
