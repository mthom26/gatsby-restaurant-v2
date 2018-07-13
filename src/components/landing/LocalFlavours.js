import React from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col
} from 'reactstrap';
import Img from 'gatsby-image';

import styles from './LocalFlavours.module.css';

const LocalFlavours = ({ data }) => {
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
              <h2 className="text-light">Locally Sourced Flavours</h2>
              <hr className="bg-light" />
              <p className="text-light">We create our menus using the freshest, local seasonal ingredients.</p>
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

export default LocalFlavours;
