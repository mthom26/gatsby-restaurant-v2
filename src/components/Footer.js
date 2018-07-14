import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Footer = () => {
  return (
    <Container className="text-light text-center bg-dark" fluid>
      <Row>
        <Col md={4}>
          
        </Col>
        <Col md={4}>
          <p>LOGO</p>
        </Col>
        <Col md={4}>
          <p>Social Icons</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
