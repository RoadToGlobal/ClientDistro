import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import SideBar from '../containers/SideBar';
import { verticalContainer, horizontalContainer } from '../DynamicStyles/common';

const App = ({ children }) =>
  <div style={new globalContainer}>
    <SideBar />
    <div style={new mainContainer}>
      <header style={{paddingLeft: '1em'}}>
        <Link to="/"><h1>GroupApp!</h1></Link>
      </header>
      { children }
    </div>
  </div>;

App.propTypes = {
  children: PropTypes.object,
};

class globalContainer extends horizontalContainer {
  minHeight = '100vh';
}

class mainContainer extends verticalContainer {
  flex = 1;
}

export default App;
