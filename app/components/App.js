import React, { PropTypes } from 'react';
import { Link } from 'react-router';

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

  render() {
    return (
      <div style={globalContainer}>
        <SideBar />
        <div style={mainContainer}>
          <header style={horizontalContainer}>
            <h1><Link to="/" style={brandName}>GroupApp!</Link></h1>
            <div>
              {!this.state.showLoginPills ?
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
          {this.state.showLoginPills ?
          <Login
            showLoginPills={this.state.showLoginPills}
            clickLogin={() => this.clickLogin()}
          />
          : null}
          { this.props.children }
        </div>
      </div>
    );
  }
}

const loginButton = {
  margin: '1em 3em',
  fontSize: '24px',
  backgroundColor: 'green',
};
const closeButton = {
  ...loginButton,
  backgroundColor: '#ff5b5b',
};
const headerContainer = {
  ...verticalContainer,
  boxShadow: 'none',
};
const globalContainer = {
  ...horizontalContainer,
  backgroundColor: '#9ae3d8',
  background: 'linear-gradient(to bottom, rgba(153,242,227,1) 0%, rgba(116,207,190,1) 42%, rgba(89,179,173,1) 77%, rgba(66,153,149,1) 100%)',
  // height: '100vh',
};
const mainContainer = {
  // ...horizontalContainer,
  marginLeft: '5em',
  flex: '1',
  boxShadow: 'none',
  flexWrap: 'wrap',
  width: '20%',
  // overflowY: 'scroll',
};
const brandName = {
  marginLeft: '1em',
  textDecoration: 'none',
  fontWeight: '600',
  color: '#3c4959',
};

export default App;
