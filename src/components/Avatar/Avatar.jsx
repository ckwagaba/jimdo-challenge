import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';

class Avatar extends Component {
    render() {
        return(
            <div className="Avatar">
                <label>{this.props.label}</label>
                <div className="AvatarBody">
                    <input
                        type={'file'}
                        name={'avatar'}
                        ref={this.props.fileInputRef}
                        onChange={this.props.handleOnChange}
                        disabled={this.props.isLoading}
                    />
                    <div className="AvatarUploadeWrapper">
                        <div
                            className={`AvatarUploader ${this.props.isValid}`}
                            onClick={this.props.handleOnClick}
                        >
                            {'Click to upload avatar'}
                        </div>
                        <div className="AvatarPreview"><img alt={this.props.alt} src={this.props.url} /></div>
                    </div>
                </div>
            </div>
        );
    }
};

Avatar.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    url: PropTypes.string,
    alt: PropTypes.string,
    isValid: PropTypes.bool,
    isLoading: PropTypes.bool,
    handleOnChange: PropTypes.func,
    handleOnClick: PropTypes.func
};

export default Avatar;