import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Build responsive websites using modern frameworks and technologies.",
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Design logos, banners, social posts with tools like Photoshop and Illustrator.",
  },
  {
    id: 3,
    title: "Content Writing",
    description: "Professional SEO blog writing, product descriptions, and ad copy.",
  },
  {
    id: 4,
    title: "App Development",
    description: "Create Android/iOS apps using Flutter or native tools.",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description: "Social media campaigns, Google Ads, and brand growth strategies.",
  },
  {
    id: 6,
    title: "Video Editing",
    description: "Edit YouTube videos, reels, and short films using Adobe Premiere/After Effects.",
  },
];

function Services() {
  const navigate = useNavigate();

  const handleHire = (serviceName) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      alert("Please log in to hire a service.");
      navigate("/login");
    } else {
      alert(`You have hired: ${serviceName}`);
      // You can navigate to confirmation/payment page here
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold text-primary">Explore Freelance Services</h2>
      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-dark">{service.title}</h5>
                <p className="card-text flex-grow-1">{service.description}</p>
                <button
                  className="btn btn-outline-primary mt-auto"
                  onClick={() => handleHire(service.title)}
                >
                  Hire Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
