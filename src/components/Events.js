import React from 'react';
import Link from 'gatsby-link';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import Img from 'gatsby-image';

import styles from './Events.module.css';

const Events = ({ data }) => {
  return (
    <div className={styles.jumbo}>
      <div className={`h-100 w-100 ${styles.content}`}>
        <Container>
          <Row>
            <Col
              md={{ size: 6, offset: 3 }}
              sm={{ size: 8, offset: 2 }}
              className="text-center"
            >
              <h2 className="text-light">Events & Functions</h2>
              <hr className="bg-light" />
              <p className="text-light">We offer multiple private areas for events & functions.</p>
              <Link to="/contact">
                <Button outline color="primary">Book An Event</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Img
        sizes={data.childImageSharp.sizes}
        style={{
          width: "100%",
          height: "100%"
        }}
      />
    </div>
  );
};

export default Events;
