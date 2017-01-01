import React, { PropTypes } from 'react';

class MemberPanel extends React.Component {
  static propTypes = {
    members: PropTypes.array,
    connectedUsers: PropTypes.array,
  }

  static defaultProps = {
    members: [],
    connectedUsers: [],
  }

  render() {
    return (
      <div style={chatMembersContainer}>
        <li style={memberList}><h3>Members:</h3></li>
        <ul style={memberList}>
          {
            this.props.members.map((member) => (
              <li
                key={member.username}
                style={this.props.connectedUsers.includes(member.username) ? connectedmember : singleMember}
              >
                {member.username}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const chatMembersContainer = {
  flex: '1',
  borderRight: '1px solid #cccccc',
};

const memberList = {
  listStyle: 'none',
  padding: '0',
};

const connectedmember = {
  marginBottom: '5px',
  fontWeight: 'Bold',
};

const singleMember = {
  marginBottom: '5px',
};

export default MemberPanel;
