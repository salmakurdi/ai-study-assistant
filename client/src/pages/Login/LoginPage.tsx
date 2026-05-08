import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card"><div className="card-body">
          <h1 className="h4 mb-3">Login</h1>
          <input className="form-control mb-2" placeholder="Email" />
          <input className="form-control mb-3" type="password" placeholder="Password" />
          <button className="btn btn-primary w-100">Sign in</button>
          <p className="small mt-3 mb-0">No account? <Link to="/register">Register</Link></p>
        </div></div>
      </div>
    </div>
  );
}
