import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import productImage1 from './images/product-image1.jpg';
import productImage2 from './images/product-image2.jpg';
import productImage3 from './images/product-image3.jpg';
import "./style.css";

const ProductRangeSection = () => {
  return (
    <section className="product-range-section">
      <Container>
        <Row>
          <Col md={4}>
            <img src={productImage1} alt="Product Image 1" />
            <h3>Product 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4}>
            <img src={productImage2} alt="Product Image 2" />
            <h3>Product 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4}>
            <img src={productImage3} alt="Product Image 3" />
            <h3>Product 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductRangeSection;