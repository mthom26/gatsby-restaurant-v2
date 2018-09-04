import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import styles from './AwardWinning.module.css';

const AwardWinning = () => {
  return (
    <Container id="next">
      <Row>
        <Col className="py-5 text-center">
          <h2>Award Winning Food & Service</h2>
          <hr className="bg-primary w-50" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tortor eu libero egestas, id dapibus ante ultricies. Donec ligula nulla, egestas vel tristique sodales, vestibulum a lacus.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AwardWinning;
