import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import heroImage from './images/hero-image.jpg';
import "./style.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col md={6}>
            <h1>Story of a Bread</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            {/* <Link to="/about" className="btn btn-primary">Learn More</Link> */}
          </Col>
          <Col md={6}>
            <img src={heroImage} alt="Hero Image" style={{ maxWidth: "100%" }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;