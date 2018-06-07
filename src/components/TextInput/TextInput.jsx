import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="TextInput">
                <label>{this.props.label}</label>
                <input type="text" placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default TextInput;