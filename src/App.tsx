// Line 2: * is used instead of react, because this is a more explicit version of saying we want everything from React
import * as React from 'react';
import './App.css';

import logo from './logo.svg';

// Line 8: We need to use dot notation, due to the initial import on line 2
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
