import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signup Success!\nName: ${name}\nEmail: ${email}`);
    // You can later connect to a backend or local storage here
  };

  return (
    <div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-5 bg-white p-5 shadow-lg rounded-4 border-0">
      <h2 className="mb-4 text-center text-primary">📝 Create Your Account</h2>
      
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your full name"
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
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

        <div className="mb-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          🚀 Sign Up
        </button>
      </form>

      <div className="text-center mt-3">
        <small>
          Already have an account? <a href="/login">Login here</a>
        </small>
      </div>
    </div>
  </div>
</div>

  );
}

export default Signup;
