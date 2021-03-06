import React from 'react';
import Img from 'gatsby-image';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import styles from './ContactAndMap.module.css';

import emailIcon from '../images/email_black.svg';
import addressIcon from '../images/address_black.svg';
import phoneIcon from '../images/phone_black.svg';

// view docs here https://tomchentw.github.io/react-google-maps/ 
const MyMapComponent = withScriptjs(withGoogleMap(() => {
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 54.343, lng: -7.6315 }}
    >
      <Marker position={{ lat: 54.3433, lng: -7.6315 }}/>
    </GoogleMap>
  );
}));

const ContactAndMap = () => {
  return (
    <Container fluid>
      <Row className="align-items-center text-center">
        <Col md={6} className="my-5">
          <h3>Contact Us</h3>
          <hr className="bg-primary w-50"/>
          <div className={styles.details}>
            <div className="my-4">
              <img src={addressIcon} width="24px" />
              <p className="d-inline ml-3">123, Belmore Street, Enniskillen</p>
            </div>
            <div className="mb-4">
              <img src={emailIcon} width="24px" />
              <p className="d-inline ml-3">info@goodeating.com</p>
            </div>
            <div className="mb-4">
              <img src={phoneIcon} width="24px" />
              <p className="d-inline ml-3">012 3456789</p>
            </div>
          </div>
        </Col>
        <Col md={6} className="px-0">
          <MyMapComponent
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactAndMap;
