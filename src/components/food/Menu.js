import React from 'react';
import Img from 'gatsby-image';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import styles from './Menu.module.css';

const Menu = ({ starters, mains, desserts }) => {
  return (
    <Container className="text-center">
      <Row className="my-5">
        <Col md={6} className="mb-5">
          <h2>Starters</h2>
          <hr className="bg-primary w-75" />
          <p>Homemade soup of the day with bread - £5.99</p>
          <p>Spicy chicken wings with cheese dip - £5.49</p>
          <p>Battered prawns, sweet chilli sauce - £6.95</p>
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
      <Row className="mb-5">
        <Col md={6} className={`${styles.itemone} mb-5`}>
          <h2>Mains</h2>
          <hr className="bg-primary w-75" />
          <p>Roast Sirloin of beef, roast potatoes & seasonal vegetables - £14.99</p>
          <p>Roast Chicken supreme, roast potatoes & seasonal veg - £12.99</p>
          <p>Cheese burger, lettuce, tomato, bacon & chunky chips - £13.99</p>
        </Col>
        <Col md={6} className={styles.itemtwo}>
          <Img
              outerWrapperClassName="h-100"
              sizes={mains.childImageSharp.sizes}
              style={{
                height: "100%"
              }}
            />
          </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6} className="mb-5">
          <h2>Desserts</h2>
          <hr className="bg-primary w-75" />
          <p>Black Forest Gateau & cream - £6.99</p>
          <p>Chocolate & coconut torte - £5.99</p>
          <p>Sticky toffee pudding & vanilla ice cream - £6.49</p>
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
