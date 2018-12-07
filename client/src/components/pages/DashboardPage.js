import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ConfirmEmail } from "../messages/ConfirmEmail";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { Message } from "semantic-ui-react";

const DashboardPage = ({ isConfirmed, isAuthenticated, userEmail }) => {
  return (
    <div>
      {isAuthenticated ? !isConfirmed && <ConfirmEmail /> : <Redirect to="/" />}
      {isConfirmed && (
        <Message positive>
          <Message.Header>Welcome!</Message.Header>
          {userEmail}
        </Message>
      )}
    </div>
  );
};

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  userEmail: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isConfirmed: state.user.confirmed,
  isAuthenticated: !!state.user.token,
  userEmail: state.user.email
});

export default withRouter(connect(mapStateToProps)(DashboardPage));
