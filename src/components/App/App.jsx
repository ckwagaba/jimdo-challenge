import React from 'react';

import './App.css';
import Button from '../Button/Button';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button label={'Submit'} />
      </div>
    );
  }
}

export default App;
