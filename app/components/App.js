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
  marginLeft: '2em',
  textDecoration: 'none',
  fontWeight: '600',
  color: '#3c4959',
};

export default App;
