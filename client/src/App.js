import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import ContactScreen from './containers/ContactScreen/ContactScreen';
import Home from './Home';
import './components/Heading/Heading.css';
import InvalidRoute from './components/InvalidRoute/InvalidRoute';
import ProjectScreen from './containers/ProjectScreen/ProjectScreen';
import AboutScreen from './containers/AboutScreen/AboutScreen';
import SideNavbar from './components/SideNavbar/SideNavbar';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className={isBrowser ? 'DesktopScreen' : ''}>
            <BrowserView className="SideBar">
              <SideNavbar />
            </BrowserView>
            <Switch className={isBrowser ? 'Content' : ''}>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={AboutScreen} />
              <Route path="/contact" exact component={ContactScreen} />
              {/* <Route path="/portfolio" exact component={}/> */}
              <Route path="/project/:id/" exact component={ProjectScreen} />
              <Route component={InvalidRoute} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
