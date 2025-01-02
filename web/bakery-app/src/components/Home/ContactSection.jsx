import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./style.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </Col>
          <Col md={6}>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" />
              <button type="submit">Send</button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;