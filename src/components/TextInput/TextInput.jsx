import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TextInput.css';

class TextInput extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: ''
        };
    }
    
    /**
     * @method
     * handle change of input
     */
    handleOnChange = (event) => {
        this.setState({
          name: event.target.value
        });
    }
    
    render() {
        console.log(this.props.isLoading);
        return (
            <div className="TextInput">
                <label>{this.props.label}</label>
                <input
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.name}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(TextInput);