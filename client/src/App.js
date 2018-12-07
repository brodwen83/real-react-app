import React, { Component } from "react";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import { Route } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
// import UserRoute from "./components/hoc/routes/UserRoute";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/dashboard" exact component={DashboardPage} />
        <Route path="/confirmation/:token" exact component={ConfirmationPage} />
      </div>
    );
  }
}

export default App;
