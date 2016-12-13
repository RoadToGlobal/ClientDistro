import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import SideBar from '../containers/SideBar';
import Login from '../containers/Login';
import { verticalContainer, horizontalContainer } from '../DynamicStyles/common';

const App = ({ children }) =>
  <div style={globalContainer}>
    <SideBar />
    <div style={mainContainer}>
      <header style={headerContainer}>
        <Link to="/" style={brandName}><h1>GroupApp!</h1></Link>
        <Login />
      </header>
      { children }
    </div>
  </div>;

App.propTypes = {
  children: PropTypes.object,
};

const headerContainer = {
  ...verticalContainer,
};

const globalContainer = {
  ...horizontalContainer,
  minHeight: '100vh',
};

const mainContainer = {
  ...verticalContainer,
  flex: '1',
};
const brandName = {
  textDecoration: 'none',
  fontWeight: '600',
  color: '#3c4959',
};

export default App;
