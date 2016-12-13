import React from 'react';
// import React, { PropTypes } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router';
import {FFFWindow} from '../DynamicStyles/common';

export default class SignInButton extends React.Component {

  render() {
    return (
      <div style={FFFWindow}>
        <Link to="/" style={logInLink} >
          <Button />
        </Link>
      </div>
    );
  }
}
const logInLink = {
  textDecoration: 'none',
}
