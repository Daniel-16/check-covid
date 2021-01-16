import React, { Component } from "react";
import Navbar from "./Navbar";
import HomePage from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewsPage from "./News";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/news" component={NewsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
