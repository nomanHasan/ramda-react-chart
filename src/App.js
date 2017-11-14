import React, { Component } from 'react';
import './App.css';
import Demo from './components/demo'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chart</h1>
        </header>
        <Demo/>
      </div>
    );
  }
}

export default App;
