import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
localStorage.setItem("isLoggedIn", true);

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@gamil.com' && password === '123456') {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
   <div className="col-md-6 col-lg-5 mx-auto mt-5">
  <div className="card shadow-lg rounded-4 border-0">
    <div className="card-body p-4">
      <h2 className="text-center mb-4">🔐 User Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          🔓 Login
        </button>
      </form>

      <div className="text-center mt-3">
        <small>
          Don't have an account? <a href="/Signup">Register here</a>
        </small>
      </div>
    </div>
  </div>
</div>

  );
}

export default UserLogin;
