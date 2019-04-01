import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import ContactScreen from './containers/ContactScreen/ContactScreen';
import Home from './Home';
import './components/Heading/Heading.css';
import InvalidRoute from './components/InvalidRoute/InvalidRoute';

class App extends Component {
 
  render() {
    
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            {/* TODO: Change the contact page into more detailed pages */}
            <Route path='/contact' exact component={ContactScreen}/>
            <Route path="/project/:id" exact/>
            <Route component={InvalidRoute}/> 
          </Switch>
        </Router>

      </div>
    );
  }
}


export default App;