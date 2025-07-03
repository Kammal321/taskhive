import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./user/Signup"; // ← Import the Signup component
import UserLogin from "./user/UserLogin";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./user/Dashboard";
import Cart from "./user/Cart";
// Inside <Routes> block


function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/adminlogin" element={<AdminLogin/>}/>
            <Route path="/Dashboard"  element={<Dashboard/>}/>
            <Route path="/Cart" element={<Cart/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
