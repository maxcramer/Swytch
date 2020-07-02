import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import NavBar from '../src/components/NavBar/NavBar.jsx'
import VideoContainer from '../src/components/VideoContainer/VideoContainer'
import ProductInfo from '../src/components/ProductInfo/ProductInfo';
import CheckoutDetails from '../src/components/CheckoutDetails/CheckoutDetails';

class App extends Component {

  render() {
    

    return (
      <Router>
        <div id="app__main">
          <NavBar />
          <div id="bellow__navbar">
            <div className="top__container">
              <VideoContainer />
              <CheckoutDetails />
            </div>
            <ProductInfo />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
