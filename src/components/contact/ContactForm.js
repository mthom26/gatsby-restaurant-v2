import React from 'react';
import Img from 'gatsby-image';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledAlert
} from 'reactstrap';
import Spinner from 'react-spinkit';

import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  formData: {
    name: '',
    email: '',
    message: ''
  },
  formSuccess: false,
  formFailure: false,
  loading: false
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  onUpdateState = (event) => {
    const { target } = event;
    this.setState({
      formData: {
        ...this.state.formData,
        [target.name]: target.value
      }
    });
  }

  onSubmit = () => {
    this.setState({ loading: true });
    return fetch(process.env.GATSBY_AWS_CONTACTFORM, {
      method: "POST",
      body: JSON.stringify(this.state.formData)
    })
      .then(response => {
        console.log(response);
        this.setState({
          ...INITIAL_STATE, 
          formSuccess: true,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          ...INITIAL_STATE,
          formFailure: true,
          loading: false
        });
      });
  }

  render() {
    const { name, email, message } = this.state.formData;
    const { formSuccess, formFailure, loading } = this.state;
    const { data } = this.props;

    return (
      <div className={styles.contactForm}>
        <div className={`${styles.contactContent}`}>
          <div className={`d-flex flex-column justify-content-center align-items-center ${styles.formContainer} text-light`}>
            <h2 className="text-center">Get In Touch</h2>
            <hr className="bg-primary w-75"/>
            <Form className="w-75 mb-5">
              <FormGroup>
                <Label for="name">Name</Label>
                <Input onChange={this.onUpdateState} value={name} type="text" name="name" id="name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input onChange={this.onUpdateState} value={email} type="email" name="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input onChange={this.onUpdateState} value={message} type="textarea" name="message" id="message" />
              </FormGroup>
              <Input type="text" name="_gotcha" style={{ display: 'none' }}/>
              <Button
                onClick={this.onSubmit}
                className={`mt-5 ${styles.button}`}
                color="primary"
                size="lg" block
              >
                <span>Submit</span>
                {loading ?
                  (<Spinner
                    className={styles.spinner}
                    name="circle" color="white"
                    fadeIn={0}
                  />)
                  : <div />
                }
              </Button>
            </Form>
            {formSuccess && (
              <UncontrolledAlert color="success">
                Form successfully sent!
              </UncontrolledAlert>
            )}
            {formFailure && (
              <UncontrolledAlert color="danger">
                Sorry there was a problem sending your message.
              </UncontrolledAlert>
            )}
          </div>
        </div>
        <Img
          outerWrapperClassName="h-100"
          style={{height: '100%'}}
          sizes={data.childImageSharp.sizes}
        />
      </div>
    );
  }
};

export default ContactForm;
