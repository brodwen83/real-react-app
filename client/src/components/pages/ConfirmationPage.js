import React, { Component } from "react";
import PropTypes from "prop-types";
import { Message, Icon, Dimmer, Loader, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { confirm } from "../../redux/actions/auth";
import { connect } from "react-redux";

class ConfirmationPage extends Component {
  state = {
    loading: true,
    success: false
  };

  componentDidMount = () => {
    this.senConfirmationEmail();
  };

  senConfirmationEmail = () => {
    this.setState({ loading: true, success: false });
    this.props
      .confirm(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  };

  render() {
    const { loading, success } = this.state;
    return (
      <div>
        {loading && (
          <Dimmer active={loading}>
            <Loader>Verifying Email...</Loader>
          </Dimmer>
        )}

        {!loading && success && (
          <Message success icon>
            <Icon name="checkmark" />
            <Message.Content>
              <Message.Header>
                Thank you. Your account has been verified
              </Message.Header>
              <Link to="/dashboard">Go to your dasboard</Link>
            </Message.Content>
          </Message>
        )}

        {!loading && !success && (
          <Message negative icon>
            <Icon name="warning sign" />
            <Message.Content>
              <Message.Header>Oooops. Invalid token it seems.</Message.Header>
            </Message.Content>
          </Message>
        )}
      </div>
    );
  }
}

ConfirmationPage.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default connect(
  null,
  { confirm }
)(ConfirmationPage);
