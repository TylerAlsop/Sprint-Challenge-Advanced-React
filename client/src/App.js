import React, { Component } from 'react';


import './App.css';

class App extends Component {
  constructor() {
    console.log("Constructor is getting called!");
    super();
    this.state = {
      playerInfo: []
    }

  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    );
  }
  
}

export default App;
