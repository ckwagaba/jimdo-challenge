import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import submitFormData from '../../actions/submitFormData';

import './App.css';

// components
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import EmailInput from '../EmailInput/EmailInput';
import TextArea from '../TextArea/TextArea';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      isLoading: false,
      isValidName: null,
      isValidEmail: null,
      isValidMessage: null
    };
  }

  /**
   * @method
   * handle change of input
   */
  handleOnChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  }

  /**
   * @method
   * toggle isLoading
  */
  toggleIsLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  }

  /**
   * @method
   * check validity of name field on blur
   */
  validateName = (event) => {
    const nameRegExp = /^[a-zA-Z ]{2,30}$/;
    const testName = nameRegExp.test((this.state.formData.name).trim());
    // update state: shall be sent down as prop to this field for appropriate styling
    this.setState({
      isValidName: testName
    });
  }

  /**
   * @method
   * check validity of email field on blur
   */
  validateEmail = (event) => {
    // found this RegExp online
    // eslint-disable-next-line
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const testEmail = emailRegExp.test((this.state.formData.email).trim());
    // update state: shall be sent down as prop to this field for appropriate styling
    this.setState({
      isValidEmail: testEmail
    });
  }

  /**
   * @method
   * check validity of message field on blur
   */
  validateMessage = (event) => {
    // only condition is to have something
    const testMessage = !!(this.state.formData.message).trim();
    // update state: shall be sent down as prop to this field for appropriate styling
    this.setState({
      isValidMessage: testMessage
    });
  }

  /**
   * @method
   * event handler for submit button click
   * also calls necessary actions
   */
  handleFormSubmission = async () => {
    // first check validity of form fields
    if(this.state.isValidName && this.state.isValidEmail && this.state.isValidMessage) {
      // makes form elements inactive when sending data
      this.toggleIsLoading();
      // send data
      await this.props.submitFormData(this.state.formData);
      this.toggleIsLoading();
    } else {
      // validate input and style invalid fields accordingly
      this.validateName();
      this.validateEmail();
      this.validateMessage();
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="background-overlay"></div>
        <div className="form-container">
          <div className="form-container-header">
            {'Introduction'}
          </div>
          <div className="form-container-main">
            <TextInput
              label={'name'}
              placeholder={'Your full name'}
              value={this.state.formData.name}
              handleOnChange={this.handleOnChange}
              validateInput={this.validateName}
              isValid={this.state.isValidName}
              isLoading={this.state.isLoading}
            />
            <EmailInput
              label={'email'}
              placeholder={'Your email address'}
              value={this.state.formData.email}
              handleOnChange={this.handleOnChange}
              validateInput={this.validateEmail}
              isValid={this.state.isValidEmail}
              isLoading={this.state.isLoading}
            />
            <TextArea
              label={'message'}
              placeholder={'Something interesting...'}
              value={this.state.formData.message}
              handleOnChange={this.handleOnChange}
              validateInput={this.validateMessage}
              isValid={this.state.isValidMessage}
              isLoading={this.state.isLoading}
            />
          </div>
          <div className="form-container-footer">
            <Button
              handleFormSubmission={this.handleFormSubmission}
              isLoading={this.state.isLoading}
            />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  submitFormData: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitFormData: async (payload) => {
      const action = await submitFormData(payload);
      dispatch(action);
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
