import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import bakeryImage from './images/product-image1.jpg';
import "./style.css";

const BakeryDetailsSection = () => {
  return (
    <section className="bakery-details-section">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Home Sweet Bakery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </Col>
          <Col md={6} style={{ textAlign: "center" }}>
            <img src={bakeryImage} alt="Bakery Image" style={{ maxWidth: "100%" }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BakeryDetailsSection;