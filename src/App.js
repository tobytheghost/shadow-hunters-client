import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home/Home";
import Room from "./views/Room/Room";

import "./stylesheets/main.scss";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms/:roomId" component={Room} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
