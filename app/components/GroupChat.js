import React, { PropTypes } from 'react';

import MemberPanel from '../components/MemberPanel';
import Chat from '../components/Chat';
import SendLine from '../components/SendLine';

class GroupChat extends React.Component {
  static propTypes = {
    postMessage: PropTypes.func,
    group: PropTypes.object,
    messages: PropTypes.array,
    connectedUsers: PropTypes.array,
  };

  render() {
    let members = this.props.group.applications.map((application) =>(application.member));

    return (
      <div style={{display: 'flex'}}>
        <div style={chatLeft}>
          <MemberPanel
            members={members}
            connectedUsers={this.props.connectedUsers}
          />
        </div>

        <div style={chatRight}>
          <Chat
            messages={this.props.messages}
          />

          <SendLine
            postMessage={this.props.postMessage}
          />
        </div>
      </div>
    );
  }
}

const chatLeft = {
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  height: '18em',
};

const chatRight = {
  display: 'flex',
  flexDirection: 'column',
  flex: '5',
};

export default GroupChat;
