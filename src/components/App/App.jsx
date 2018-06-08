import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      }
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
   * event handler for submit button click
   * also calls necessary actions
   */
  handleFormSubmission = () => {
    // makes form elements inactive when sending data
    this.props.submitFormDataRequest();
    
    this.props.submitFormData(this.state.formData).then(() => {
      // makes form elements active again
      this.props.submitFormDataRequest();
    });
  }
  
  render() {
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
            />
            <EmailInput
              label={'email'}
              placeholder={'Your email address'}
              value={this.state.formData.email}
              handleOnChange={this.handleOnChange}
            />
            <TextArea
              label={'message'}
              placeholder={'Something interesting...'}
              value={this.state.formData.message}
              handleOnChange={this.handleOnChange}
            />
          </div>
          <div className="form-container-footer">
            <Button label={'Submit'} handleFormSubmission={this.handleFormSubmission} />
          </div>
        </div>
      </div>
    );
  }
}

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
