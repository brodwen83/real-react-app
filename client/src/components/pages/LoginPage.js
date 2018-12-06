import React from "react";
import PropTypes from "prop-types";
import LoginForm from "../forms/LoginForm";
import { login } from "../../redux/actions/auth";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

class LoginPage extends React.Component {
  /** get data from <loginForm />
   *  then redirects to home when no errors
   *  @param login - thunk action from user-actions   */
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        {!isAuthenticated ? (
          <div>
            <h2>Login Page</h2>
            <LoginForm submit={this.submit} />
          </div>
        ) : (
          <Redirect to="/dashboard" />
        )}
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.token
});

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
