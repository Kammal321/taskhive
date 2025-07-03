import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div className="py-5 bg-light">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-center text-primary fw-bold">About TaskHive</h2>
            <p className="text-center text-muted">
              Empowering businesses and individuals by connecting them with top-tier freelance talent across the globe.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h4 className="fw-semibold">Who We Are</h4>
            <p>
              TaskHive is a modern freelancing platform that enables clients to hire skilled professionals across diverse fields like web development, graphic design, writing, and digital marketing.
            </p>
          </Col>
          <Col md={6}>
            <h4 className="fw-semibold">Our Mission</h4>
            <p>
              Our mission is to simplify the freelancing experience by providing a secure, efficient, and intuitive environment where clients and freelancers can collaborate and succeed.
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <h4 className="fw-semibold">Why Choose TaskHive?</h4>
            <ul>
              <li>✔ Verified and skilled freelancers</li>
              <li>✔ Secure communication and transactions</li>
              <li>✔ Easy-to-use dashboard for users & admins</li>
              <li>✔ 24/7 support and resolution services</li>
            </ul>
          </Col>
          <Col md={6}>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
