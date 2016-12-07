import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import {FFFWindow, verticalContainer, horizontalContainer} from '../DynamicStyles/common';

const App = ({ children }) =>
  <div style={new globalContainer}>
    <aside style={new sidebarStyle}>
      <Link to="/">Home</Link>
      <Link to="/activitystatus">ActivityStatus</Link>
      <Link to="/group">Group</Link>
    </aside>
    <div style={new mainContainer}>
      <header style={{paddingLeft: '1em'}}>
        <Link to="/"><h1>GroupApp!</h1></Link>
      </header>
      <div style={new FFFContainer}>
        { children }
      </div>
    </div>
  </div>;

App.propTypes = {
  children: PropTypes.object,
};

class FFFContainer extends verticalContainer {
  alignItems = 'center';
  marginRight = 'auto';
  marginLeft = 'auto';
}

class globalContainer extends horizontalContainer {
  minHeight = '100vh';
}

class mainContainer extends verticalContainer {
  flex = 5;
}

class sidebarStyle extends verticalContainer {
  flex = 1
  minWidth = '10em';
  color = '#aaa';
  backgroundColor = '#666';
  borderWidth = 0;
  borderRightWidth = 2;
  borderColor = 'black';
  borderStyle = 'solid';
}

export default App;
