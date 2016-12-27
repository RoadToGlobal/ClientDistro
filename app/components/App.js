import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import SideBar from '../containers/SideBar';
import Login from '../containers/Login';
import GeneralButton from '../components/GeneralButton';
import { verticalContainer, horizontalContainer } from '../DynamicStyles/common';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      showLoginPills: false,
    }
  }

  clickLogin() {
    this.setState({
      showLoginPills: !this.state.showLoginPills,
    });
  }

  componentWillReceiveProps(newProps) {
    if(newProps.CurrentUser.user){
      this.setState({
        showLoginPills: false,
      });
    }
  }

  render() {
    return (
      <div style={globalContainer}>
        <SideBar />
        <div style={mainContainer}>
          <header style={horizontalContainer}>
            <h1 style={{flex: 1}}><Link to="/" style={brandName}>GroupApp!</Link></h1>
            <div style={{display: 'flex', justifyContent: 'flex-end', flex: 1}}>
            {this.props.CurrentUser.user ?
              <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 1}}>
                <span style={welcomeText}>Welcome, <span style={boldText}>{this.props.CurrentUser.user.username}</span>!</span>
                <GeneralButton
                  buttonContent={'Logout'}
                  buttonStyle={logoutButton}
                  onClick={this.props.logoutCurrentUser}
                />
              </div>
              : !this.state.showLoginPills ?
              <GeneralButton
                buttonContent={'Login'}
                buttonStyle={loginButton}
                onClick={() => this.clickLogin()}
              />
              :
              <GeneralButton
                buttonContent={'Close'}
                buttonStyle={closeButton}
                onClick={() => this.clickLogin()}
              />
            }
            </div>
          </header>
          <Login
            showLoginPills={this.state.showLoginPills}
            clickLogin={() => this.clickLogin()}
          />
          { this.props.children }
        </div>
      </div>
    );
  }
}

const boldText = {
  fontWeight: 700,
};
const welcomeText = {
  fontSize: '24px',
  marginLeft: '1.5em',
};
const loginButton = {
  margin: '1em 3em',
  fontSize: '24px',
  backgroundColor: '#28b50e',
};
const closeButton = {
  ...loginButton,
  backgroundColor: '#ff5b5b',
};
const logoutButton = {
  ...loginButton,
  margin: '1em 3em 1em 1em',
  backgroundColor: '#ff6a1f',
};
const headerContainer = {
  ...verticalContainer,
  boxShadow: 'none',
};
const globalContainer = {
  ...horizontalContainer,
  backgroundColor: '#9ae3d8',
  background: 'linear-gradient(to bottom, rgba(153,242,227,1) 0%, rgba(116,207,190,1) 42%, rgba(89,179,173,1) 77%, rgba(66,153,149,1) 100%)',
  height: '100vh',
};
const mainContainer = {
  ...verticalContainer,
  flex: '1',
  boxShadow: 'none',
  overflowY: 'scroll',
};
const brandName = {
  fontFamily: 'Nunito',
  marginLeft: '2em',
  textDecoration: 'none',
  fontWeight: '600',
  color: '#3c4959',
};

const mapStateToProps = (state) => {
  return {
    CurrentUser: state.CurrentUser,
  };
};

const mapDispatchToProps = {
  logoutCurrentUser: actions.users.logoutCurrentUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
