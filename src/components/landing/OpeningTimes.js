import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

const OpeningTimes = ({ data }) => {
  return (
    <Container className="bg-dark text-light" fluid>
    <Row>
      <Col className="py-5" md={6}>
        <h3>Our serving times are:</h3>
        
        <p className="font-weight-bold">Monday - Thursday</p>
        <p className="font-italic">food served 12pm - 9pm</p>
        <p className="font-weight-bold">Friday - Saturday</p>
        <p className="font-italic">food served 12pm - 10pm</p>
        <p className="font-weight-bold">Sunday</p>
        <p className="font-italic">food served 12pm - 5pm</p>
        <hr className="bg-primary w-25 mx-0 my-4"/>
        <h3>Get in touch to make a reservation:</h3>
        <Link to="/contact">
          <Button color="primary">Get In Touch</Button>
        </Link>
      </Col>
      <Col className="px-0" md={6}>
        <Img
          outerWrapperClassName="h-100"
          sizes={data.childImageSharp.sizes}
          style={{
            height: "100%"
          }}
        />
      </Col>
    </Row>
    </Container>
  );
};

export default OpeningTimes;
