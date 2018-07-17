import React from 'react';

import ContactAndMap from '../components/ContactAndMap';
import ContactForm from '../components/contact/ContactForm';

const Contact = ({ data }) => {
  const { contactImage } = data;

  return (
    <div id="top" style={{ marginTop: '63px' }}>
      <ContactForm data={contactImage} />
      <ContactAndMap />
    </div>
  );
};

export const query = graphql`
  query ContactQuery {
    contactImage: file(relativePath: { eq: "images/contact.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default Contact;
