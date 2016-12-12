import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import LoginPill from '../components/LoginPill';
import LoginWindow from '../components/LoginWindow';
import { FFFWindow, verticalContainer } from '../DynamicStyles/common';

const loginStyle = {
  ...verticalContainer,
  margin: '0 auto',
  padding: '1em',
};

const loginBox = {
  ...verticalContainer,
  flex: 1,
};

const loginLink = {
  textAlign: 'right',
};

class Login extends React.Component {
  static propTypes = {

  };

  constructor() {
    super();
  }

  render() {
    return (
      <div style={loginStyle}>
        <div style={loginBox}>
          <h2 style={loginLink}><a href="#">Login</a></h2>
        </div>
        <LoginPill />
        <LoginWindow />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
