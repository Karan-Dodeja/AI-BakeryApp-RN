import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./style.css";

const BenefitsOfBreadSection = () => {
  return (
    <section className="benefits-of-bread-section">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Benefits of Bread</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </Col>
          <Col md={6}>
            <img src="https://via.placeholder.com/400x200" alt="Benefits of Bread Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BenefitsOfBreadSection;