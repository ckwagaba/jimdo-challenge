import React, { Component } from 'react';
import './EmailInput.css';

class EmailInput extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="EmailInput">
                <label>{this.props.label}</label>
                <input type="email" placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default EmailInput;