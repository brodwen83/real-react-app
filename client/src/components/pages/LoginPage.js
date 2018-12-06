import React from "react";
import PropTypes from "prop-types";
import LoginForm from "../forms/LoginForm";
import { login } from "../../redux/actions/auth";

import { connect } from "react-redux";

class LoginPage extends React.Component {
  /** get data from <loginForm />
   *  then redirects to home when no errors
   *  @param login - thunk action from user-actions   *
   */
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(LoginPage);
