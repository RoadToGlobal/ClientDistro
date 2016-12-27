import React, { PropTypes } from 'react';

const sendLineContainer = {
  display: 'flex',
  height: '2em',
};

const sendBtn = {
  flex: '1',
  fontFamily: 'Nunito',
};
const sendInput = {
  flex: '6',
};

class SendLine extends React.Component {
  render() {
    return (
      <div style={sendLineContainer}>
        <input style={sendInput} placeholder="text here plz"/>
        <button style={sendBtn}>SEND</button>
      </div>
    );
  }
}

SendLine.propTypes = {
  member: PropTypes.object,
};

export default SendLine;
