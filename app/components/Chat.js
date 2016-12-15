import React, { PropTypes } from 'react';

const chatContainer = {
  height: '16em',
};

const chatWindow = {
  padding: '0.4em',
  overflow: 'hidden',
  height: '15em',
};

class Chat extends React.Component {
  render() {
    return (
      <div style={chatContainer}>
        <div style={chatWindow}>
          <p><b>Mr.Miagi: </b> hehe, ching chong</p>
          <p><b>Frasse: </b> Öh, va saru!?</p>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  member: PropTypes.object,
};

export default Chat;
