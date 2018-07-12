import React from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col
} from 'reactstrap';
import Img from 'gatsby-image';

import styles from './Header.module.css';

// ToDo: Vertically center Jumbotron
const Header = ({ data }) => {
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
              <h1 className="text-light">Food Menu</h1>
              <p className="text-light lead">This is the food menu</p>
              <hr className="bg-light" />
              <p className="text-light">Made from locally sourced...</p>
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

export default Header;
