import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card"><div className="card-body">
          <h1 className="h4 mb-3">Register</h1>
          <input className="form-control mb-2" placeholder="Name" />
          <input className="form-control mb-2" placeholder="Email" />
          <input className="form-control mb-3" type="password" placeholder="Password" />
          <button className="btn btn-success w-100">Create account</button>
          <p className="small mt-3 mb-0">Already registered? <Link to="/login">Login</Link></p>
        </div></div>
      </div>
    </div>
  );
}
