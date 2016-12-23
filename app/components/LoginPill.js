import React, { PropTypes } from 'react';
import GeneralButton from '../components/GeneralButton';

const pillContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',

  flex: 1,
};
const pillItemText = {
  textAlign: 'center',
  padding: 5,

  flex: 1,
};
const pillItemContainer = {
  backgroundColor: '#3c4959',
  border: '3px solid #3c4959',
  borderRadius: 20,
  padding: 5,
  marginRight: 5,
  textAlign: 'center',
  cursor: 'pointer',

  flex: 1,
};
const pillItemLink = {
  color: '#fff',
  textDecoration: 'none',
};
const closeCross = {
  margin: '-0.5em',
  display: 'block',
  padding: '1px 12px',
  backgroundColor: 'transparent',
  color: '#ff5b5b',
  height: '30px',
  fontSize: '1.5em',
  zIndex: 9999,
};

class LoginPill extends React.Component {
  static propTypes = {
    showLoginPills: PropTypes.bool,
    clickGroupApp: PropTypes.func,
    clickGoogle: PropTypes.func,
    clickFacebook: PropTypes.func,
    closeLogin: PropTypes.func,
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div style={pillContainer}>
        <h2 style={pillItemText}>Login with:</h2>
        <h2
          style={pillItemContainer}
          onClick={this.props.clickGroupApp}>
            <span style={pillItemLink}>Group app</span>
        </h2>
        <h2
          style={pillItemContainer}
          onClick={this.props.clickGoogle}>
            <span style={pillItemLink}>Google+</span>
        </h2>
        <h2
          style={pillItemContainer}
          onClick={this.props.clickFacebook}>
            <span style={pillItemLink}>Facebook</span>
        </h2>
        <GeneralButton
          buttonStyle={closeCross}
          buttonContent={'✖'}
          onClick={this.props.closeLogin}
        />
      </div>
    );
  }
}

export default LoginPill;
