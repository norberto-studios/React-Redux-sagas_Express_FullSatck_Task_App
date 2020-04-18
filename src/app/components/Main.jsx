import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ConnectedDashboard } from "./Dashboard";
import { Router, Route } from "react-router-dom";
import { history } from "../redux/store/history";
import { ConnectedNavigation } from "./Navigation";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <ConnectedNavigation />
      <Route exact path="/dashboard" render={() => <ConnectedDashboard />} />
    </Provider>
  </Router>
);
