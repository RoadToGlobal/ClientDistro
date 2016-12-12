import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import {FFFWindow, horizontalContainer} from '../DynamicStyles/common';

const windowContainer = {
  ...FFFWindow,
  flex: 1,

  ...horizontalContainer,
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  padding: '1em',
  backgroundColor: '#fff',
};

const windowItem = {
  backgroundColor: 'grey',
  color: '#fff',
  padding: '0.5em',
};

class LoginWindow extends React.Component {
  static propTypes = {

  }
  constructor() {
    super();
  }

  render() {
    return (
      <div style={windowContainer}>
        <button style={windowItem}>Google+</button>
      </div>
    );
  }
}

export default LoginWindow;
