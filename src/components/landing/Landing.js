import React from 'react';
import Img from 'gatsby-image';

import styles from './Landing.module.css';

const Landing = ({ data }) => {
  return (
    <div className={styles.landing}>
      <div className={styles.landingContent}>
        <h1 className="display-1 text-light">Landing</h1>
      </div>
      <Img
        outerWrapperClassName="h-100"
        style={{height: '100%'}}
        sizes={data.childImageSharp.sizes}
      />
    </div>
  );
};

export default Landing;
