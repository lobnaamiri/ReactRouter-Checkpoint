import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h3>head</h3>
      <Router>
        <div className="nav">
          {}
          <h3>Menu</h3>
          <Link to="/">Home</Link>&nbsp;&nbsp;
          <Link to="/About">About</Link>&nbsp;&nbsp;
          <Link to="/contact">Contact</Link>
        
        </div> 
        <div className="affich">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/About" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
        <h3>footer</h3>
       
      </Router>
    </div>
  );
}

export default App;
