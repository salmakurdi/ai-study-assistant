import { Link, NavLink, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="container py-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded px-3 mb-4">
        <Link className="navbar-brand" to="/">AI Study Assistant</Link>
        <div className="navbar-nav gap-2">
          <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
          <NavLink className="nav-link" to="/upload">Upload PDF</NavLink>
          <NavLink className="nav-link" to="/summary">Summary</NavLink>
          <NavLink className="nav-link" to="/quiz">Quiz</NavLink>
          <NavLink className="nav-link" to="/study-plan">Study Plan</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
