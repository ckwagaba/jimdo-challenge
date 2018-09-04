import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import submitFormDataRequest from '../../actions/submitFormDataRequest';
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
   * validate form onBlur of any of the fields
   */
  validateInput = (event) => {
    // check validity of name field
    const isValidName = () => {
      const nameRegExp = /^[a-zA-Z ]{2,30}$/;
      const testName = nameRegExp.test((this.state.formData.name).trim());
      // update state: shall be sent down as prop to this field for appropriate styling
      this.setState({
        isValidName: testName
      });
      return testName;
    };
    
    // check validity of email field
    const isValidEmail = () => {
      // found this RegExp online
      // eslint-disable-next-line
      const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const testEmail = emailRegExp.test((this.state.formData.email).trim());
      // update state: shall be sent down as prop to this field for appropriate styling
      this.setState({
        isValidEmail: testEmail
      });
      return testEmail;
    };
    
    // check validity of message field
    const isValidMessage = () => {
      // only condition is to have something
      const testMessage = !!(this.state.formData.message).trim();
      // update state: shall be sent down as prop to this field for appropriate styling
      this.setState({
        isValidMessage: testMessage
      });
      return testMessage;
    };
    
    // validate all fields
    isValidName();
    isValidEmail();
    isValidMessage();
  }
  
  /**
   * @method
   * event handler for submit button click
   * also calls necessary actions
   */
  handleFormSubmission = () => {
    // validate first
    if(this.state.isValidName && this.state.isValidEmail && this.state.isValidMessage) {
      // makes form elements inactive when sending data
      this.props.submitFormDataRequest();
      
      this.props.submitFormData(this.state.formData).then(() => {
        // makes form elements active again
        this.props.submitFormDataRequest();
      });
    } else {
      // style invalid fields accordingly
      this.validateInput();
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
              validateInput={this.validateInput}
              isValid={this.state.isValidName}
            />
            <EmailInput
              label={'email'}
              placeholder={'Your email address'}
              value={this.state.formData.email}
              handleOnChange={this.handleOnChange}
              validateInput={this.validateInput}
              isValid={this.state.isValidEmail}
            />
            <TextArea
              label={'message'}
              placeholder={'Something interesting...'}
              value={this.state.formData.message}
              handleOnChange={this.handleOnChange}
              validateInput={this.validateInput}
              isValid={this.state.isValidMessage}
            />
          </div>
          <div className="form-container-footer">
            <Button handleFormSubmission={this.handleFormSubmission} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  submitFormDataRequest: PropTypes.func,
  submitFormData: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitFormDataRequest: () => {
      dispatch(submitFormDataRequest());
    },
    submitFormData: async (payload) => {
      const action = await submitFormData(payload);
      dispatch(action);
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
