import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './TextInput.css';

class TextInput extends Component {
    render() {
        return (
            <div className="TextInput">
                <label>{this.props.label}</label>
                <input
                    type="text"
                    name={'name'}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.handleOnChange}
                    disabled={this.props.isLoading}
                />
            </div>
        );
    }
}

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  isLoading: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(TextInput);