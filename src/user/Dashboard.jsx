import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import MyBookings from './MyBookings';

function Dashboard() {
  return (
    <div className="row">
      <div className="col-md-3 bg-light p-3">
        <h4>User Menu</h4>
        <ul className="nav flex-column">
          <li className="nav-item"><Link className="nav-link" to="/dashboard">Cart</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/dashboard/bookings">Bookings</Link></li>
        </ul>
      </div>
      <div className="col-md-9">
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/bookings" element={<MyBookings />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
