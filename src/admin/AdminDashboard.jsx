import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ManageServices from './ManageServices';
import UsersList from './UsersList';

function AdminDashboard() {
  return (
    <div className="row">
      <div className="col-md-3 bg-light p-3">
        <h4>Admin Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item"><Link className="nav-link" to="/admin/dashboard/services">Manage Services</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/admin/dashboard/users">Users List</Link></li>
        </ul>
      </div>
      <div className="col-md-9">
        <Routes>
          <Route path="/services" element={<ManageServices />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;
