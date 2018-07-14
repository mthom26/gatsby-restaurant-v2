import React from 'react';
import Img from 'gatsby-image';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Menu = ({ starters, mains, desserts }) => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Starters</h2>
        </Col>
        <Col md={6}>
          <Img
            outerWrapperClassName="h-100"
            sizes={starters.childImageSharp.sizes}
            style={{
              height: "100%"
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Mains</h2>
        </Col>
        <Col md={6}>
          <Img
              outerWrapperClassName="h-100"
              sizes={mains.childImageSharp.sizes}
              style={{
                height: "100%"
              }}
            />
          </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Desserts</h2>
        </Col>
        <Col md={6}>
          <Img
              outerWrapperClassName="h-100"
              sizes={desserts.childImageSharp.sizes}
              style={{
                height: "100%"
              }}
            />
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
