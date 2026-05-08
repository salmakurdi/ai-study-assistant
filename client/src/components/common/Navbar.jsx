import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../ui/Button';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const linkClass = ({ isActive }) => `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`;

  return (
    <nav className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <span className="text-lg font-bold text-slate-800">AI Study Assistant</span>
        <div className="flex items-center gap-4">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/properties" className={linkClass}>Properties</NavLink>
          <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
          {!isAuthenticated ? <NavLink to="/login" className={linkClass}>Login</NavLink> : <Button onClick={logout}>Logout</Button>}
        </div>
      </div>
    </nav>
  );
}
