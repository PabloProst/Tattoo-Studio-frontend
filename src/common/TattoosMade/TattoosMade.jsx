import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './TattoosMade.css';

export const TattoosMade = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center h-100">
      <Row className="gallery-container">
        <Col xs={6} sm={3} md={3} lg={3}>
          <img className='image-gallery' src='../src/assets/img/tattoo2.jpg' alt='Tattoo 2' />
        </Col>
        <Col xs={6} sm={3} md={3} lg={3}>
          <img className='image-gallery' src='../src/assets/img/TATTOO11.jpg' alt='Tattoo' />
        </Col>
        <Col xs={6} sm={3} md={3} lg={3}>
          <img className='image-gallery' src='../src/assets/img/TATTOO12.jpg' alt='Tattoo' />
        </Col>
        <Col xs={6} sm={3} md={3} lg={3}>
          <img className='image-gallery' src='../src/assets/img/TATTOO13.jpg' alt='Tattoo' />
        </Col>
        <Col xs={6} sm={3} md={3} lg={3}>
          <img className='image-gallery' src='../src/assets/img/TATTOO14.jpg' alt='Tattoo' />
        </Col>
        <Col xs={6} sm={3} md={3} lg={3}>
          <img className='image-gallery' src='../src/assets/img/TATTOO15.jpg' alt='Tattoo' />
        </Col>
        <Col xs={6} sm={3} md={3} lg={3}>
          <img className='image-gallery' src='../src/assets/img/TATTOO16.jpg' alt='Tattoo' />
        </Col>
        <Col xs={6} sm={3} md={3} lg={3}>
          <img className='image-gallery' src='../src/assets/img/TATTOO17.jpg' alt='Tattoo' />
        </Col>
        <Col xs={6} sm={3} md={3} lg={3}>
          <img className='image-gallery' src='../src/assets/img/TATTOO18.jpg' alt='Tattoo' />
        </Col>
      </Row>
    </Container>
  );
};
