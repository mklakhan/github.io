import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <div className="">
     


      <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Manpreet Lakhan</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <a className="nav-link" aria-current="page" href="index.html">Home</a> */}
              <Link to="/">Home</Link>
              {/* <a className="nav-link" href="portfolio.html">Portfolio</a> */}
              <Link to="/portfolio">Portfolio</Link>
              {/* <a className="nav-link" href="contact.html">Contact</a> */}
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

      <footer className="navbar fixed-bottom navbar-dark bg-dark">
        <span className="navbar-text">© MKL 2020</span>
      </footer>
    </div>
  );
}

export default App;
