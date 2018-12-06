import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SignupForm from "../forms/SignupForm";
import { signup } from "../../redux/actions/users";

class SignupPage extends Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        {!isAuthenticated ? (
          <div>
            <h2>Signup Page</h2>
            <SignupForm submit={this.submit} />
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

SignupPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.token
});

export default connect(
  mapStateToProps,
  { signup }
)(SignupPage);
