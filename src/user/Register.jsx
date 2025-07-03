import React from 'react';

function Register() {
  return (
    <div className="col-md-6 mx-auto">
      <h2>User Registration</h2>
      <form>
        <input className="form-control mb-2" type="text" placeholder="Name" required />
        <input className="form-control mb-2" type="email" placeholder="Email" required />
        <input className="form-control mb-2" type="password" placeholder="Password" required />
        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;
