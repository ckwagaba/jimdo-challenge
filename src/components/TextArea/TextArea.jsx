import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TextArea.css';

class TextArea extends Component {
    render() {
        return (
            <div className="TextArea">
                <label>{this.props.label}</label>
                <textarea
                    name={'message'}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.handleOnChange}
                    disabled={this.props.isLoading}
                ></textarea>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(TextArea);