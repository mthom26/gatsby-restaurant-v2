import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

import styles from './FoodAndDrink.module.css';

const FoodAndDrink = ({ foodImage, drinkImage}) => {
  return (
    <Container fluid>
      <Row>
        <Col className="px-0" md={6}>
          <div className={`${styles.content} ${styles.brownBg} text-light`}>
            <h3>Food Menu</h3>
            <hr className="bg-light w-50"/>
            <p>View Our Food Menu</p>
            <Link to="/food">
              <Button outline color="primary">View Food Menu</Button>
            </Link>
          </div>
          <Img
            outerWrapperClassName="h-100"
            sizes={foodImage.childImageSharp.sizes}
            style={{
              height: "100%"
            }}
          />
        </Col>
        <Col className="px-0" md={6}>
          <div className={`${styles.content} ${styles.blackBg} text-light`}>
            <h3>Drinks Menu</h3>
            <hr className="bg-light w-50"/>
            <p>View Our Drinks Menu</p>
            <Link to="/drinks">
              <Button outline color="primary">View Drinks Menu</Button>
            </Link>
          </div>
          <Img
            outerWrapperClassName="h-100"
            sizes={drinkImage.childImageSharp.sizes}
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FoodAndDrink;
