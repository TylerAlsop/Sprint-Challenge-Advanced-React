import React, { Component } from 'react';
import PlayerList from './Components/PlayerList';
import FavPlayerList from './Components/FavPlayerList';
import axios from 'axios';


import './App.css';

class App extends Component {
  constructor() {
    console.log("Constructor is getting called!");
    super();
    this.state = {
      playersInfo: []
    }
  };

  componentDidMount() {
    console.log("Component Mount")

    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log("This is the API Data:", res)
        this.setState({ playersInfo: res.data })
        this.setState({ withFavKey: [...this.state.playersInfo]})
      })
        
      .catch(err => console.log("Error with axios call", err))



  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated. This is the new state:", this.state)

    this.state.playersInfo.map(player => {
      return player.favPlayer = true
    })

    const favPlayerKey = this.state.playersInfo.map(player => {
      return player.favPlayer
    })

    console.log("favPlayer? in App.js", favPlayerKey)
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="page-title">Who Are Your Favorite Players?</h1>
          <div className="both-lists">
            <div className="all-players-list">
              <h2>List of Players</h2>
              <PlayerList playersInfo={this.state.playersInfo} />
            </div>
            <div className="list-of-favs">
              <h2>Favorite Players</h2>
              <FavPlayerList 
                playersInfo={this.state.playersInfo} 
                favPlayerKey={this.state.playersInfo.map(player => {return player.favPlayer})}
               />
            </div>

          </div>

        </header>
      </div>
    );
  }
  
}

export default App;
