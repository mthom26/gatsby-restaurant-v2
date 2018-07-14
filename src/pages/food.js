import React from 'react';

import Header from '../components/food/Header';
import Menu from '../components/food/Menu';

const Food = ({ data }) => {
  const {
    foodImage,
    starters,
    mains,
    desserts
  } = data;

  return (
    <div>
      <Header data={foodImage} />
      <Menu
        starters={starters}
        mains={mains}
        desserts={desserts}
      />
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
    starters: file(relativePath: { eq: "images/starters.png" }) {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    mains: file(relativePath: { eq: "images/mains.png" }) {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    desserts: file(relativePath: { eq: "images/desserts.png" }) {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default Food;
