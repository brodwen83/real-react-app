import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Label } from "semantic-ui-react";
import Validator from "validator";

class SignupForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).catch(err => {
        this.setState({ errors: err.response.data.errors, loading: false });
      });
    }
  };

  validate = data => {
    const errors = {};
    if (!data.password) errors.password = "password can't be blank...";
    if (!Validator.isEmail(data.email)) errors.email = "invalid email...";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              value={data.email}
              onChange={this.onChange}
            />
            {errors.email && (
              <Label basic color="red" pointing>
                {errors.email}
              </Label>
            )}
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && (
              <Label basic color="red" pointing>
                {errors.password}
              </Label>
            )}
          </Form.Field>
          <Button primary>Sign Up</Button>
        </Form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
