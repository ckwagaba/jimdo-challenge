import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TextArea.css';

class TextArea extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message: ''
        };
    }
    
    /**
     * @method
     * handle change of input
     */
    handleOnChange = (event) => {
        this.setState({
          message: event.target.value
        });
    }
    
    render() {
        return (
            <div className="TextArea">
                <label>{this.props.label}</label>
                <textarea
                    placeholder={this.props.placeholder}
                    value={this.state.message}
                    onChange={this.handleOnChange}
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