import React from 'react';
import Img from 'gatsby-image';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

import styles from './ContactForm.module.css';

const ContactForm = ({ data }) => {
  return (
    <div className={styles.contactForm}>
      <div className={`${styles.contactContent}`}>
        <div className={`d-flex flex-column justify-content-center align-items-center ${styles.formContainer} text-light`}>
          <h2 className="text-center">Get In Touch</h2>
          <hr className="bg-primary w-75"/>
          <Form className="w-75">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" name="message" id="message" />
            </FormGroup>
            <Button className="mt-5" color="primary" size="lg" block>Submit</Button>
          </Form>
        </div>
      </div>
      <Img
        outerWrapperClassName="h-100"
        style={{height: '100%'}}
        sizes={data.childImageSharp.sizes}
      />
    </div>
  );
};

export default ContactForm;
