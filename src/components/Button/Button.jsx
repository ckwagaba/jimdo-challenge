import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Button.css';

// actions
import submitFormDataRequest from '../../actions/submitFormDataRequest';
import submitFormData from '../../actions/submitFormData';

// fixtures
import { testFormData } from '../../fixtures/formData';

class Button extends Component {
    /**
     * @method
     * event handler for submit button click
     * also calls necessary actions
     */
    handleFormSubmission = () => {
      this.props.submitFormDataRequest();
      this.props.submitFormData(testFormData).then(() => {
        console.log('sent')
        this.props.submitFormDataRequest();
      });
    }
    
    render() {
      return (
        <button className="button" onClick={this.handleFormSubmission}>
          {this.props.label}
        </button>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    formData: state.formData,
    isLoading: state.isLoading
  };
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);
