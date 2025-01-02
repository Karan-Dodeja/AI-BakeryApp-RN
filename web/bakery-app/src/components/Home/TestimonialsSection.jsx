import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./style.css";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <Container>
        <Row>
          <Col md={6}>
            <h2>What Our Customers Say</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </Col>
          <Col md={6}>
            <img src="https://via.placeholder.com/400x200" alt="Testimonials Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;