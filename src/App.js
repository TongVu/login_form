import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import UserPage from "./components/UserPage";
import LoginPage from "./components/LoginPage";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/user" component={UserPage} />
      </Switch>
    );
  }
}
