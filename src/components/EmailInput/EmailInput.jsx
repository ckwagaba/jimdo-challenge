import React from 'react';
import PropTypes from 'prop-types';

import './EmailInput.css';

const EmailInput = (props) => {
  return (
      <div className={`EmailInput ${props.isValid}`}>
          <label>{props.label}</label>
          <input
              type={'email'}
              name={'email'}
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.handleOnChange}
              onBlur={props.validateInput}
              disabled={props.isLoading}
          />
      </div>
  );
};

EmailInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool
};

export default EmailInput;
