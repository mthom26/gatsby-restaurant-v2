import React from 'react';
import Img from 'gatsby-image';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Menu = ({ data }) => {
  return (
    <Container>
      <Row className="my-5">
        <Col md={6}>
          <h2 className="text-center">Drinks</h2>
          <hr className="bg-primary w-75"/>
          <p>Maecenas malesuada varius arcu, at molestie enim pharetra a. Curabitur vitae tristique dui. Etiam congue elementum turpis non dignissim. Fusce dictum nunc placerat, varius diam eget, imperdiet sem. Donec laoreet convallis magna, et lobortis metus accumsan eget.</p>
          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget erat non libero pulvinar vulputate. Donec in posuere turpis, in euismod diam. Sed.</p>
        </Col>
        <Col md={6}>
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

export default Menu;