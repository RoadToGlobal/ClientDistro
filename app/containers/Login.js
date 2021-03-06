import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import LoginPill from '../components/LoginPill';
import LoginWindow from '../components/LoginWindow';
import FFFWindow from '../containers/FFFWindow';
import { verticalContainer } from '../DynamicStyles/common';

// TODO: Animate the login
const loginContainer = {
  ...verticalContainer,
  boxShadow: 'none',
  padding: '0 10vw',
  marginLeft: '5em',
};
const loginStyle = {
  minHeight: 'initial',
};

class Login extends React.Component {
  static propTypes = {
    CurrentUser: PropTypes.object,
    readCurrentUser: PropTypes.func,
    showLoginPills: PropTypes.bool,
    clickLogin: PropTypes.func,
    setToken: PropTypes.func,
    login: PropTypes.string,

  };

  constructor() {
    super();
    this.state = {
      showLoginWindow: false,
      showGroupAppLogin: false,
      showGoogleLogin: false,
      showFacebookLogin: false,
    };
  }

  componentWillMount() {
    const token = localStorage.token;

    if(token) {
      this.props.setToken(token);
      this.props.readCurrentUser(); // Will in turn read mygroups too
    }
  }

  clickGroupAppPill() {
    if(this.props.showLoginPills) {
      this.setState({
        showLoginWindow: true,
        showGroupAppLogin: !this.state.showGroupAppLogin,
        showGoogleLogin: false,
        showFacebookLogin: false,
      });
    }
  }

  clickGooglePill() {
    if(this.props.showLoginPills) {
      this.setState({
        showLoginWindow: true,
        showGroupAppLogin: false,
        showGoogleLogin: !this.state.showGoogleLogin,
        showFacebookLogin: false,
      });
    }
  }

  clickFacebookPill() {
    if(this.props.showLoginPills) {
      this.setState({
        showLoginWindow: true,
        showGroupAppLogin: false,
        showGoogleLogin: false,
        showFacebookLogin: !this.state.showFacebookLogin,
      });
    }
  }

  render() {
    return (
      <div style={loginContainer}>
        {this.props.showLoginPills ?
        <div style={loginStyle}>
          <FFFWindow title="" header={Boolean(false)} specStyle={{height: 'inherit'}}>
            <LoginPill
              showGroupAppLogin={this.state.showGroupAppLogin}
              showGoogleLogin={this.state.showGoogleLogin}
              showFacebookLogin={this.state.showFacebookLogin}
              closeLogin={this.props.clickLogin}
              closeShowLogin={() => this.closeShowLogin()}
              clickGroupApp={() => this.clickGroupAppPill()}
              clickGoogle={() => this.clickGooglePill()}
              clickFacebook={() => this.clickFacebookPill()}
            />
            {this.state.showLoginWindow ?
            <LoginWindow
              showGroupAppLogin={this.state.showGroupAppLogin}
              showGoogleLogin={this.state.showGoogleLogin}
              showFacebookLogin={this.state.showFacebookLogin}
              userLoginInput={this.props.login}
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

const mapDispatchToProps = {
  readCurrentUser: actions.users.readCurrentUser,
  setToken: actions.users.setToken,
  login: actions.users.login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
