import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Button.css';

// components
import Loader from '../Loader/Loader';

class Button extends Component {
  render() {
    return (
      <button
         className="button"
         onClick={this.props.handleFormSubmission}
         disabled={this.props.isLoading}
      >
        {
          this.props.isLoading ? <Loader /> : 'submit'
        }
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(Button);
