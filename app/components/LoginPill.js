import React, { PropTypes } from 'react';

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

class LoginPill extends React.Component {
  static propTypes = {
    showPills: PropTypes.bool,
    clickPill: PropTypes.func,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={pillContainer}>
        <h2 style={pillItemText}>Login with:</h2>
        <h2
          style={pillItemContainer}
          onClick={this.props.clickPill}>
            <a style={pillItemLink} href="#">Group app</a>
        </h2>
        <h2
          style={pillItemContainer}
          onClick={this.props.clickPill}>
            <a style={pillItemLink} href="#">Google+</a>
        </h2>
        <h2
          style={pillItemContainer}
          onClick={this.props.clickPill}>
            <a style={pillItemLink} href="#">Facebook</a>
        </h2>
      </div>
    );
  }
}

export default LoginPill;
