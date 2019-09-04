import React from "react";
import Main from "./components/Main/main";
import Settings from "./components/Settings/settings";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
