import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home/Home";
import Room from "./views/Room/Room";
import Lobby from "./views/Lobby/Lobby";
import globalReducer, { initialGlobalState } from "./context/GlobalReducer";
import { GlobalStateProvider } from "./context/GlobalStateProvider";

import "./stylesheets/main.scss";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <GlobalStateProvider
        initialState={initialGlobalState}
        reducer={globalReducer}
      >
        <Router>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/lobby/:roomId" component={Lobby} />
              <Route exact path="/rooms/:roomId" component={Room} />
            </Switch>
          </main>
        </Router>
      </GlobalStateProvider>
    </div>
  );
};

export default App;
