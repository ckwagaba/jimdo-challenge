import React from 'react';
import PropTypes from 'prop-types';

import './TextInput.css';

const TextInput = (props) => {
  return (
      <div className={`TextInput ${props.isValid}`}>
          <label>{props.label}</label>
          <input
              type={'text'}
              name={'name'}
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.handleOnChange}
              onBlur={props.validateInput}
              disabled={props.isLoading}
          />
      </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  validateInput: PropTypes.func,
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool
};

export default TextInput;
