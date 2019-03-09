import React, { Component } from 'react';
import './App.css';
// import Players from './Players/player';
import Demoplayer from './newplayers/demoplayer';
import teams from './newplayers/sort';
class App extends Component {
  render() {
    return (
      <div className="App">
      
     <Demoplayer></Demoplayer>
     <div>Java Scipt function result:
          {
            teams.map((team, i) => {
              return (
                <div key={i}>
                  <div>Team: {team.team}</div>
                  <div>Total Points: {team.points}</div>
                  <hr />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
