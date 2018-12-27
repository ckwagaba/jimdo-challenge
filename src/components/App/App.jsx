import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import submitFormData from '../../actions/submitFormData';

// stylesheets
import './App.css';

// images
import imagePlaceholder from '../../assets/images/image-placeholder.png';

// components
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import EmailInput from '../EmailInput/EmailInput';
import TextArea from '../TextArea/TextArea';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        avatar: imagePlaceholder,
        message: ''
      },
      isLoading: false,
      isValidName: null,
      isValidEmail: null,
      isValidAvatar: null,
      isValidMessage: null
    };
    this.fileInputRef = createRef();
  }

  /**
   * @method
   * handle change of input
   */
  handleOnChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  }
  
  /**
   * @method
   * handle click event of the file uploader
   * invokes click on the hidden file input element using React Refs
   */
  handleOnClick = (event) => {
    this.fileInputRef.current.click();
  }
  
  /**
   * @method
   * handle change event of file input element
   */
  handleFileInputOnChange = (event) => {
    // process image and read it using the file reader API
    // update avatar state avariable
    var file = event.target.files[0];
    if (file) {
      console.log(file);
      // validate file - should be image
      // validate input kwanza
      // we want .jpg, .png, .gif (maybe not gifs)
      // regex from MDN
      if (/\.(jpe?g|png)$/i.test(file.name)) {
        // this test: file.type.match('images/*') - passes for Adobe Illustrator files
        // so we use the regex above
        // turns out .ai is recognized as image/svg+xml
        // file reader object
        let reader = new FileReader();
        // read contents of file
        reader.readAsDataURL(file);
        // when succesfully read
        reader.onload = (e) => {
          // update state
          // console.log(reader.result);
          // console.log(e.target.result);
          // e.target === reader
          // update state
          this.setState({
            formData: {
              ...this.state.formData,
              avatar: e.target.result
            }
          });
          // then validate
          this.validateAvatar();
        };
      } else {
        // some validation is handled here
        this.setState({
          formData: {
            ...this.state.formData,
            avatar: imagePlaceholder
          },
          isValidAvatar: false
        });
      }
    }
  }

  /**
   * @method
   * toggle isLoading
  */
  toggleIsLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  }

  /**
   * @method
   * check validity of name field on blur
   */
  validateName = (event) => {
    const nameRegExp = /^[a-zA-Z ]{2,30}$/;
    const testName = nameRegExp.test((this.state.formData.name).trim());
    // update state: shall be sent down as prop to this field for appropriate styling
    this.setState({
      isValidName: testName
    });
  }

  /**
   * @method
   * check validity of email field on blur
   */
  validateEmail = (event) => {
    // found this RegExp online
    // eslint-disable-next-line
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const testEmail = emailRegExp.test((this.state.formData.email).trim());
    // update state: shall be sent down as prop to this field for appropriate styling
    this.setState({
      isValidEmail: testEmail
    });
  }
  
  /**
   * @method
   * check validity of avatar on blur
   */
  validateAvatar = () => {
    console.log('validating...');
    const avatar = this.state.formData.avatar;
    console.log(avatar);
    if (/^data:image\//i.test(avatar)) {
      // should not be default image
      // expecting a base64 encoded Data URL
      this.setState({
        isValidAvatar: true
      });
    } else {
      // throw
      this.setState({
        isValidAvatar: false
      });
    }
  }

  /**
   * @method
   * check validity of message field on blur
   */
  validateMessage = (event) => {
    // only condition is to have something
    const testMessage = !!(this.state.formData.message).trim();
    // update state: shall be sent down as prop to this field for appropriate styling
    this.setState({
      isValidMessage: testMessage
    });
  }

  /**
   * @method
   * event handler for submit button click
   * also calls necessary actions
   */
  handleFormSubmission = async () => {
    // first check validity of form fields
    if(this.state.isValidName && this.state.isValidEmail && this.state.isValidAvatar && this.state.isValidMessage) {
      // makes form elements inactive when sending data
      this.toggleIsLoading();
      // send data
      await this.props.submitFormData(this.state.formData);
      this.toggleIsLoading();
    } else {
      // validate input and style invalid fields accordingly
      this.validateName();
      this.validateEmail();
      this.validateAvatar();
      this.validateMessage();
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="background-overlay"></div>
        <div className="form-container">
          <div className="form-container-header">
            {'Introduction'}
          </div>
          <div className="form-container-main">
            <TextInput
              label={'name'}
              placeholder={'Your full name'}
              value={this.state.formData.name}
              handleOnChange={this.handleOnChange}
              validateInput={this.validateName}
              isValid={this.state.isValidName}
              isLoading={this.state.isLoading}
            />
            <EmailInput
              label={'email'}
              placeholder={'Your email address'}
              value={this.state.formData.email}
              handleOnChange={this.handleOnChange}
              validateInput={this.validateEmail}
              isValid={this.state.isValidEmail}
              isLoading={this.state.isLoading}
            />
            <Avatar
              label={'avatar'}
              url={this.state.formData.avatar}
              alt={'Avatar'}
              fileInputRef={this.fileInputRef}
              handleOnChange={this.handleFileInputOnChange}
              handleOnClick={this.handleOnClick}
              isValid={this.state.isValidAvatar}
              isLoading={this.state.isLoading}
            />
            <TextArea
              label={'message'}
              placeholder={'Something interesting...'}
              value={this.state.formData.message}
              handleOnChange={this.handleOnChange}
              validateInput={this.validateMessage}
              isValid={this.state.isValidMessage}
              isLoading={this.state.isLoading}
            />
          </div>
          <div className="form-container-footer">
            <Button
              handleFormSubmission={this.handleFormSubmission}
              isLoading={this.state.isLoading}
            />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  submitFormData: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitFormData: async (payload) => {
      const action = await submitFormData(payload);
      dispatch(action);
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
