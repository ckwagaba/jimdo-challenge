import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

// components
import Loader from '../Loader/Loader';

const Button = (props) => {
  return (
    <button
       className="button"
       onClick={props.handleFormSubmission}
       disabled={props.isLoading}
    >
      {
        props.isLoading ? <Loader /> : 'submit'
      }
    </button>
  );
};

Button.propTypes = {
  isLoading: PropTypes.bool,
  handleFormSubmission: PropTypes.func
};

export default Button;
