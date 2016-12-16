import React from 'react';

const shareInput = {
  height: '2em',
  width: '100%',
  borderRadius: '2px',
  border: 'none',
};

class Button extends React.Component {
  render() {
    return (
      <div style={{width: '80%'}}>
        <input style={shareInput} value="http://groupapp.com/group/test" />
      </div>
    );
  }
}

export default Button;
