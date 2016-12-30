import React from 'react';
import GeneralInput from '../components/GeneralInput';

const shareInput = {
  fontFamily: 'arial',
  height: '2em',
  width: '100%',
  borderRadius: '2px',
  border: 'none',
};

class Button extends React.Component {
  render() {
    return (
      <div style={{width: '80%'}}>
        <GeneralInput
          inputStyle={shareInput}
          inputValue={' http://groupapp.com/group/test'}
        />
      </div>
    );
  }
}

export default Button;
