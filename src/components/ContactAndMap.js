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
      <Row>
        <Col md={6}>
          <h3>Contact Us</h3>
          <hr />
          <p>Address</p>
          <p>Email Address</p>
          <p>Phone Number</p>
        </Col>
        <Col md={6}>
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
