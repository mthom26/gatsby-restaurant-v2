import React from 'react';

import Header from '../components/drinks/Header';

const Drinks = ({ data }) => {
  const { mainImage } = data;

  return (
    <div>
      <Header data={mainImage} />
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
  }
`;

export default Drinks;
