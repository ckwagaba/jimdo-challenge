import React from 'react';

import './App.css';

// components
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="form-container">
          <div className="form-container-header">
            {'Introduction'}
          </div>
          <div className="form-container-main">
            <TextInput label={'name'} placeholder={'Your full name'} />
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
