import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import NavBar from '../src/components/NavBar/NavBar.jsx'
import VideoContainer from '../src/components/VideoContainer/VideoContainer'

class App extends Component {

  render() {
    

    return (
      <Router>
        <div id="app__main">
          <NavBar />
          <div id="bellow__navbar">
            <VideoContainer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
