import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/services");
  };

  return (
    <div className="bg-light d-flex flex-column justify-content-center align-items-center min-vh-100 text-center px-3">
      <h1 className="display-3 fw-bold text-primary mb-3">Welcome to TaskHive</h1>
      <p className="lead text-muted mb-4">
        Hire skilled freelancers for any job, anywhere, anytime — securely and efficiently.
      </p>
      <button className="btn btn-primary btn-lg shadow-sm" onClick={handleExploreClick}>
        🚀 Explore Services
      </button>
    </div>
  );
}

export default Home;
