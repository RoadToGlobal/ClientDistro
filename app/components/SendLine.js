import React, { PropTypes } from 'react';
import GeneralInput from '../components/GeneralInput';
import GeneralButton from '../components/GeneralButton';

const sendLineContainer = {
  display: 'flex',
  height: '2em',
};
const chatItems = {
  height: '100%',
  width: '100%',
};


class SendLine extends React.Component {
  render() {
    return (
      <div style={sendLineContainer}>
        <div style={{flex: 6}}>
          <GeneralInput
            inputStyle={chatItems}
            inputPlaceholder=" text here plz.."
          />
        </div>
        <div style={{flex: 1}}>
          <GeneralButton
            buttonStyle={chatItems}
            buttonContent={'Send'}
          />
        </div>
      </div>
    );
  }
}

SendLine.propTypes = {
  member: PropTypes.object,
};

export default SendLine;
