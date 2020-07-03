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
import Notifications from './components/Notifications/Notifications';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <Router>
        <div id="app__main" className="App">
          <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen}/>
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
            <Notifications />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
