import Routes from './Routes';
import React, { Component } from 'react';
import './App.css';
import Demo from './components/demo'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ramda React Chart</h1>
        </header>
        <Routes/>
      </div>
    );
  }
}

export default App;
