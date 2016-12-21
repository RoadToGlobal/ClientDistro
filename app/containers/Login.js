import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import GeneralButton from '../components/GeneralButton';
import LoginPill from '../components/LoginPill';
import LoginWindow from '../components/LoginWindow';
import FFFWindow from '../containers/FFFWindow';
import { verticalContainer } from '../DynamicStyles/common';

// TODO: Animate the login

const loginContainer = {
  ...verticalContainer,
  boxShadow: 'none',
};
const loginStyle = {
  margin: 'auto',
  minHeight: 'initial',
};
const loginBox = {
  margin: '0 auto 5px auto',
  width: '28em',
  marginBottom: 5,
  textAlign: 'right',
  flex: 1,
};
const loginLink = {
  color: '#3c4959',
  textDecoration: 'none',
};
const closeButton = {
  float: 'right',
  cursor: 'pointer',
  color: '#fff',
  borderRadius: 30,
  background: '#3c4959',
  fontSize: 31,
  fontWeight: 700,
  lineHeight: 0,
  padding: '8px',
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
      showGroupAppLogin: false,
      showGoogleLogin: false,
      showFacebookLogin: false,
    };
  }

  clickLogin() {
    this.setState({
      showLoginPills: !this.state.showLoginPills,
      showLoginButton: false,
      showGroupAppLogin: false,
      showGoogleLogin: false,
      showFacebookLogin: false,
    });
  }

  clickGroupAppPill() {
    if(this.state.showLoginPills) {
      this.setState({
        showLoginButton: true,
        showGroupAppLogin: !this.state.showGroupAppLogin,
        showGoogleLogin: false,
        showFacebookLogin: false,
      });
    }
  }

  clickGooglePill() {
    if(this.state.showLoginPills) {
      this.setState({
        showLoginButton: true,
        showGroupAppLogin: false,
        showGoogleLogin: !this.state.showGoogleLogin,
        showFacebookLogin: false,
      });
    }
  }

  clickFacebookPill() {
    if(this.state.showLoginPills) {
      this.setState({
        showLoginButton: true,
        showGroupAppLogin: false,
        showGoogleLogin: false,
        showFacebookLogin: !this.state.showFacebookLogin,
      });
    }
  }
  userLoginInput(usr, pass) {
    console.log(usr, pass);
  }

  render() {
    return (
      <div style={this.state.showLoginPills ? {...loginContainer, marginBottom: '2em'} : loginContainer}>
        <h2 style={loginBox}>
          <a
            style={loginLink}
            href="#"
            onClick={() => this.clickLogin()}>
            {this.state.showLoginPills ?
              <GeneralButton
                buttonContent={'×'}
                buttonStyle={closeButton} />
              : 'Login'}
          </a>
        </h2>

        {this.state.showLoginPills ?
          <div style={loginStyle}>
            <FFFWindow title="" header={Boolean(false)} specStyle={{height: 'inherit'}}>
                <LoginPill
                  showPills={this.state.showLoginPills}
                  clickGroupApp={() => this.clickGroupAppPill()}
                  clickGoogle={() => this.clickGooglePill()}
                  clickFacebook={() => this.clickFacebookPill()}
                />
                {this.state.showLoginButton ?
                  <LoginWindow
                    showGroupAppLogin={this.state.showGroupAppLogin}
                    showGoogleLogin={this.state.showGoogleLogin}
                    showFacebookLogin={this.state.showFacebookLogin}
                    userLoginInput={this.userLoginInput}
                  />
                  : null}
            </FFFWindow>
          </div>
          : null}

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
