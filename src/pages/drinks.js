import React from 'react';

import Header from '../components/drinks/Header';
import Events from '../components/Events';
import ContactAndMap from '../components/ContactAndMap';

const Drinks = ({ data }) => {
  const { mainImage, eventsImage } = data;

  return (
    <div>
      <Header data={mainImage} />
      <Events data={eventsImage} />
      <ContactAndMap />
    </div>
  );
};

export const query = graphql`
  query DrinksQuery {
    mainImage: file(relativePath: { eq: "images/winerack.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    eventsImage: file(relativePath: { eq: "images/eventsImage.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default Drinks;
