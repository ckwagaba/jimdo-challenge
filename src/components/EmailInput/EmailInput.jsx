import React, { Component } from 'react';
import './EmailInput.css';

class EmailInput extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: ''
        };
    }
    
    /**
     * @method
     * handle change of input
     */
    handleOnChange = (event) => {
        this.setState({
          email: event.target.value
        });
    }
    
    render() {
        return (
            <div className="EmailInput">
                <label>{this.props.label}</label>
                <input
                    type="email"
                    placeholder={this.props.placeholder}
                    value={this.state.email}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

export default EmailInput;