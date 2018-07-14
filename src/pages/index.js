import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from '../components/landing/Landing';
import AwardWinning from '../components/landing/AwardWinning';
import OpeningTimes from '../components/landing/OpeningTimes';
import LocalFlavours from '../components/landing/LocalFlavours';
import FoodAndDrink from '../components/landing/FoodAndDrink';
import Events from '../components/Events';
import ContactAndMap from '../components/ContactAndMap';

const Index = ({ data }) => {
  const {
    landingImage,
    openingTimesImage,
    localFlavourImage,
    foodImage,
    drinkImage,
    eventsImage
  } = data;

  return (
    <div>
      <Landing data={landingImage} />
      <AwardWinning />
      <OpeningTimes data={openingTimesImage} />
      <LocalFlavours data={localFlavourImage} />
      <FoodAndDrink foodImage={foodImage} drinkImage={drinkImage} />
      <Events data={eventsImage} />
      <ContactAndMap />
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    landingImage: file(relativePath: { eq: "images/landing.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    openingTimesImage: file(relativePath: { eq: "images/openingTimesImage.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    localFlavourImage: file(relativePath: { eq: "images/localFlavour.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    foodImage: file(relativePath: { eq: "images/food.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    drinkImage: file(relativePath: { eq: "images/drink.jpg" }) {
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

export default Index;
