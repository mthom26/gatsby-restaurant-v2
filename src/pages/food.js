import React from 'react';

import Header from '../components/food/Header';

const Food = ({ data }) => {
  const { foodImage } = data;

  return (
    <div>
      <Header data={foodImage} />
    </div>
  );
};

export const query = graphql`
  query FoodQuery {
    foodImage: file(relativePath: { eq: "images/foodNarrowed.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default Food;
