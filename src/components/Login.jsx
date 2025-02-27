import React from "react";

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
          </div>

          {/* Remember Me Checkbox */}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100">Login</button>

          {/* Forgot Password & Signup Links */}
          <div className="mt-3 text-center">
            <a href="#" className="text-decoration-none">Forgot password?</a>
            <p className="mt-2">
              Don't have an account? <a href="#" className="text-decoration-none">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
