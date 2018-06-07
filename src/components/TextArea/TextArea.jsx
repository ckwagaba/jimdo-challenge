import React, { Component } from 'react';
import './TextArea.css';

class TextArea extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="TextArea">
                <label>{this.props.label}</label>
                <textarea placeholder={this.props.placeholder}></textarea>
            </div>
        );
    }
}

export default TextArea;