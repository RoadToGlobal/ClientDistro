import React from 'react';
import InputRow from './InputRow';
import InputRowController from './InputRowController';

class InputSection extends React.Component {
  render() {
    return (
      <div>
       <InputRow />
       <InputRowController />
      </div>
    );
  }
}

export default InputSection;
