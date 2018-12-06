import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/auth";

const HomePage = ({ isAuthenticated, logout }) => {
  return (
    <div>
      <h2>Home Page</h2>
      {isAuthenticated ? (
        <Button onClick={() => logout()}>Logout</Button>
      ) : (
        <Button.Group>
          <Button positive as={Link} to="/login">
            Login
          </Button>
          <Button.Or />
          <Button primary as={Link} to="/signup">
            Signup
          </Button>
        </Button.Group>
      )}
    </div>
  );
};

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.token
});

export default connect(
  mapStateToProps,
  { logout: actions.logout }
)(HomePage);
