import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  isLoading: PropTypes.bool,
  handleFormSubmission: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(Button);
