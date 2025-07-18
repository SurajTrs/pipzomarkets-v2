import React from "react";
import "../style.css";

const Login: React.FC = () => {
  return (
    <div className="login-background d-flex justify-content-center align-items-center vh-100">
      <div className="login-card p-4 rounded shadow text-center">
        <h2 className="mb-4 text-white">LOGIN</h2>
        <form>
          <div className="form-group mb-3">
            <input type="text" className="form-control" placeholder="Username" />
          </div>
          <div className="form-group mb-4">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-dark w-100 mb-3">
            SIGN IN
          </button>
          <small className="text-white">
            Forgot Password? <a href="#" className="text-info">Click Here</a>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
