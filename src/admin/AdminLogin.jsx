import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [admin, setAdmin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (admin === 'admin@taskhive.com' && password === '123') {
      alert('Admin logged in!');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="col-md-6 mx-auto">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input className="form-control mb-2" type="email" placeholder="Admin Email" onChange={(e) => setAdmin(e.target.value)} required />
        <input className="form-control mb-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-dark w-100">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
