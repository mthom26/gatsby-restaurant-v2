import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import styles from './Footer.module.css';

import facebookIcon from '../images/facebook_white.svg';
import twitterIcon from '../images/twitter_white.svg';
import logo from '../images/logogradient.svg';

const Footer = () => {
  return (
    <Container className="text-light text-center bg-dark" fluid>
      <Row>
        <Col className="py-3" md={4}>
          
        </Col>
        <Col className="py-3" md={4}>
          <img src={logo} width="48px"/>
        </Col>
        <Col className="py-3" md={4}>
          <a className={`${styles.socialButton} mx-4`} href="#">
            <img src={facebookIcon} />
          </a>
          <a className={`${styles.socialButton} mx-4`} href="#">
            <img src={twitterIcon} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
