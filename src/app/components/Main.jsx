import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ConnectedDashboard } from "./Dashboard";
import { Router, Route } from "react-router-dom";
import { history } from "../redux/store/history";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedTaskDetail } from "./TaskDetail";
import {Redirect} from 'react-router';
import { ConnectedLogin } from "./Login";

const RouteGuard = (Component) =>({match}) =>{
  console.log("Route Guard ", match);
  if(!store.getState().session.authenticated)
  {
      return <Redirect to="/"/>
  }else{
    return <Component match={match}/>
  }
}

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <ConnectedNavigation />
      <Route exact path="/" component={ConnectedLogin} />
      <Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)} />
      <Route exact path="/task/:id" render={RouteGuard(ConnectedTaskDetail)} />
    </Provider>
  </Router>
);
