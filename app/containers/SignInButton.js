import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router';
import {FFFWindow} from '../DynamicStyles/common';

export default class SignInButton extends React.Component {

  render() {
    return (
      <div style={buttonContainer}>
        <Link to="/" style={logInLink} >
          <Button />
        </Link>
      </div>
    );
  }
}
const logInLink = {
  textDecoration: 'none',
};
const buttonContainer = {
  ...FFFWindow,
  boxShadow: 'none',
  backgroundColor: 'transparent',
  paddingTop: '0',
};
