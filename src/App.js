import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import NavBar from '../src/components/NavBar/NavBar.jsx'
import VideoContainer from '../src/components/VideoContainer/VideoContainer'
import ProductInfo from '../src/components/ProductInfo/ProductInfo';
import CheckoutDetails from '../src/components/CheckoutDetails/CheckoutDetails';
import CrowdFunding from '../src/components/CrowdFunding/CrowdFunding';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/BackDrop/BackDrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  }

  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop />;
    }

    return (
      <Router>
        <div id="app__main" className="App">
          <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
          {sideDrawer}
          {backdrop}
          <div id="bellow__navbar">
            <div className="top__container">
              <VideoContainer />
              <div className="right_panel">
                <CrowdFunding />
                <ProductInfo />
                <CheckoutDetails />
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
