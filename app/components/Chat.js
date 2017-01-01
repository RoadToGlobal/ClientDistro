import React, { PropTypes } from 'react';

class Chat extends React.Component {
  static propTypes = {
    messages: PropTypes.array,
    connectedUsers: PropTypes.array,
  };

  static deafultProps = {
    messages: [],
  };

  render() {
    return (
      <div style={chatContainer}>
        <div style={chatWindow}>
          {this.props.messages.map((message, index) =>(
            <p key={index}><b>{message.username + ': '}</b>{message.message}</p>
          ))}
        </div>
      </div>
    );
  }
}

const chatContainer = {
  height: '16em',
};

const chatWindow = {
  padding: '0.4em',
  overflow: 'hidden',
  height: '15em',
  overflowY: 'scroll',
};

export default Chat;
