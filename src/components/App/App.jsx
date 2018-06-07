import React from 'react';

import './App.css';

// components
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import EmailInput from '../EmailInput/EmailInput';
import TextArea from '../TextArea/TextArea';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="background-overlay"></div>
        <div className="form-container">
          <div className="form-container-header">
            {'Introduction'}
          </div>
          <div className="form-container-main">
            <TextInput label={'name'} placeholder={'Your full name'} />
            <EmailInput label={'email'} placeholder={'Your email address'} />
            <TextArea label={'message'} placeholder={'Something interesting...'} />
          </div>
          <div className="form-container-footer">
            <Button label={'Submit'} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
