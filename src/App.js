// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            {/* search page */}
            <SearchPage />
            {/* <h3>this is the search page</h3> */}
          </Route>
          <Route path="/">
            {/* home page  */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
