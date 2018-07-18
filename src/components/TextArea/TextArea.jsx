import React from 'react';
import PropTypes from 'prop-types';

import './TextArea.css';

const TextArea = (props) => {
  return (
      <div className={`TextArea ${props.isValid}`}>
          <label>{props.label}</label>
          <textarea
              name={'message'}
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.handleOnChange}
              onBlur={props.validateInput}
              disabled={props.isLoading}
          ></textarea>
      </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool
};

export default TextArea;
