import React from 'react';

import Header from '../components/drinks/Header';
import Menu from '../components/drinks/Menu';
import Events from '../components/Events';
import ContactAndMap from '../components/ContactAndMap';

const Drinks = ({ data }) => {
  const { mainImage, eventsImage, drinksImage } = data;

  return (
    <div id="top">
      <Header data={mainImage} />
      <Menu data={drinksImage}/>
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
    drinksImage: file(relativePath: { eq: "images/drinks.png" }) {
      childImageSharp {
        sizes(maxWidth: 1000) {
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
