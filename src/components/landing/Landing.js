import React from 'react';
import Img from 'gatsby-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../../images/logogradient.svg';
import emailIcon from '../../images/email_white.svg';
import addressIcon from '../../images/address_white.svg';
import phoneIcon from '../../images/phone_white.svg';
import arrow from '../../images/arrow.svg';

import styles from './Landing.module.css';

const Landing = ({ data }) => {
  return (
    <div className={styles.landing}>
      <div className={`${styles.landingContent} text-light`}>
        <img src={logo} width="128px" />
        <h1 className="display-1">Landing</h1>
        <hr className="bg-light w-25" />
        <div className="my-4">
          <img src={addressIcon} width="24px" />
          <p className="d-inline ml-4">Address</p>
        </div>
        <div className="mb-4">
          <img src={emailIcon} width="24px" />
          <p className="d-inline ml-4">Email Address</p>
        </div>
        <div className="mb-4">
          <img src={phoneIcon} width="24px" />
          <p className="d-inline ml-4">Phone Number</p>
        </div>
        <AnchorLink href="#next"><img src={arrow} /></AnchorLink>
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
