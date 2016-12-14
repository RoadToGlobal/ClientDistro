import React from 'react';
// import React, { PropTypes } from 'react';

class Button extends React.Component {
  render() {
    return (
      <div style={buttonStyle}>
        <h2 style={buttonText}>Save this group search by signing in with facebook/google</h2>
      </div>
    );
  }
}
const buttonStyle = {
  backgroundColor: '#ff5b5b',
  color: '#fff',
  height: '3em',
  borderRadius: '3px',
  // textAlign: 'center',
  boxShadow: '1px 1px 10px #888888',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const buttonText = {

};

export default Button;
