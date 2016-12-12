import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { FFFWindow, horizontalContainer } from '../DynamicStyles/common';

const pillContainer = {
  ...FFFWindow,
  flex: 1,

  ...horizontalContainer,
  margin: 'auto',
  padding: '1em',
  backgroundColor: '#fff',
};

const pillItems = {
  flex: 1,
  //border: '1px solid #000'
};

class LoginPill extends React.Component {
  static propTypes = {

  }
  constructor() {
    super();
  }

  render() {
    return (
      <div style={pillContainer}>
        <h2 style={pillItems}>Login with:</h2>
        <h2 style={pillItems}><a href="">Group app</a></h2>
        <h2 style={pillItems}><a href="">Google+</a></h2>
        <h2 style={pillItems}><a href="">Facebook</a></h2>
      </div>
    );
  }
}

export default LoginPill;
