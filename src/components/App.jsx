import React, { Component } from "react";
// import Navbar from "./Navbar";
import HomePage from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewsPage from "./News";
import SelfAssessment from "./SelfAssessment";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/news" exact component={NewsPage} />
            <Route path="/selfassessment" component={SelfAssessment} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
