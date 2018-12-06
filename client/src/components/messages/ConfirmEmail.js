import React from "react";
import { Message } from "semantic-ui-react";

export const ConfirmEmail = () => (
  <Message warning>
    <Message.Header>Email not yer verified.</Message.Header>
    <p>Please verify your email address first to continue</p>
  </Message>
);
