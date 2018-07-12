import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from '../components/landing/Landing';

const Index = ({ data }) => {
  const { landingImage } = data;

  return (
    <div>
      <Landing data={landingImage}/>
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
  }
`;

export default Index;
