import React from 'react';

import GeneralButton from '../components/GeneralButton';
import { Link } from 'react-router';
import {FFFWindowStyle} from '../DynamicStyles/common';

export default class SignInButton extends React.Component {

  render() {
    return (
      <div style={buttonContainer}>
        <Link to="/" style={logInLink} >
          <GeneralButton
            buttonContent={'Save this group search by signing in with facebook/google'}
            buttonStyle={buttonStyle}
          />
        </Link>
      </div>
    );
  }
}

const buttonStyle = {
  backgroundColor: '#ff5b5b',
  color: '#fff',
  height: '3em',
  borderRadius: '3px',
  boxShadow: '1px 1px 10px #888888',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5em',
  width: '100%',
};
const logInLink = {
  textDecoration: 'none',
};
const buttonContainer = {
  ...FFFWindowStyle,
  backgroundColor: 'transparent',
  height: 'inherit',
  padding: '0',
};
