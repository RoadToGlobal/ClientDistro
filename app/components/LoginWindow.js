import React from 'react';

const windowContainer = {
  flex: 1,

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  margin: 'auto',
  backgroundColor: '#fff',
  minHeight: 0,
};
const windowItem = {
  backgroundColor: 'grey',
  color: '#fff',
  padding: '0.5em',
};

class LoginWindow extends React.Component {
  static propTypes = {
  };

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
