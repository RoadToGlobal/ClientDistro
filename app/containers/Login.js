import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import LoginPill from '../components/LoginPill';
import LoginWindow from '../components/LoginWindow';
import { FFFWindowStyle, verticalContainer } from '../DynamicStyles/common';

/* ToDo:
*  - Animate the login
*  - Change "Close" link to design
*/

const loginContainer = {
  ...verticalContainer,
  boxShadow: 'none',
};
const loginStyle = {
  ...FFFWindowStyle,
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
    CurrentUser: PropTypes.object,
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
    if(this.state.showLoginPills) {
      this.setState({
        showLoginButton: this.state.showLoginPills,
      });
    }
  }

  render() {
    return (
      <div style={this.state.showLoginPills ? {...loginContainer, marginBottom: '2em'} : loginContainer}>
        <h2 style={loginBox}>
          <a
            style={loginLink}
            href="#"
            onClick={() => this.clickLogin()}>
            {this.state.showLoginPills ? 'Close' : 'Login'}
          </a>
        </h2>
        <div style={this.state.showLoginPills ? loginStyle : {display: 'none'}}>
          <LoginPill
            showPills={this.state.showLoginPills}
            clickPill={() => this.clickPill()}
          />
          {this.state.showLoginButton ? <LoginWindow /> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CurrentUser: state.CurrentUser,
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
