import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import LoginPill from '../components/LoginPill';
import LoginWindow from '../components/LoginWindow';
import { FFFWindow, verticalContainer } from '../DynamicStyles/common';


const loginContainer = {
  ...verticalContainer,
  boxShadow: 'none',
};
const loginStyle = {
  ...FFFWindow,
  margin: 'auto',
  minHeight: 'initial',
  boxShadow: '1px 1px 10px #888888',
};
const loginBox = {
  margin: 5,
  width: '40em',
  marginBottom: 5,
  textAlign: 'right',
  flex: 1,
};
const loginLink = {
  color: '#3c4959',
  textDecoration: 'none',
};

class Login extends React.Component {
  static propTypes = {
  };
  constructor() {
    super();
    this.state = {
      showLoginPills: false,
      showLoginButton: false,
    };
  }

  clickLogin() {
    this.setState({
      showLoginPills: !this.state.showLoginPills,
      showLoginButton: false,
    });
  }

  clickPill() {
    if(this.state.showLoginPills === true) {
      this.setState({
        showLoginButton: this.state.showLoginPills,
      });
    }
  }

  render() {
    return (
      <div style={loginContainer}>
        <h2 style={loginBox}>
          <a
            style={loginLink}
            href="#"
            onClick={() => this.clickLogin()}>
              {this.state.showLoginPills ? 'Close' : 'Login'}
          </a>
        </h2>
        {this.state.showLoginPills ?
        <div style={loginStyle}>
          <LoginPill clickPill={() => this.clickPill()} />
          {this.state.showLoginButton ? <LoginWindow /> : null}
        </div>
        : null}
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
