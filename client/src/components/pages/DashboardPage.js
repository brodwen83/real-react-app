import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ConfirmEmail } from "../messages/ConfirmEmail";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

const DashboardPage = ({ isConfirmed, isAuthenticated }) => {
  return (
    <div>
      {isAuthenticated ? !isConfirmed && <ConfirmEmail /> : <Redirect to="/" />}
    </div>
  );
};

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isConfirmed: !!state.user.confirmed,
  isAuthenticated: !!state.user.token
});

export default withRouter(connect(mapStateToProps)(DashboardPage));
