import React, { PropTypes } from 'react';

const chatMembersContainer = {
  flex: '1',
  borderRight: '1px solid #cccccc',
};
const memberList = {
  listStyle: 'none',
  padding: '0',
};
const singleMember = {
  marginBottom: '5px',
};

class MemberPanel extends React.Component {
  render() {
    return (
      <div style={chatMembersContainer}>
        <li style={memberList}><h3>Members:</h3></li>
        <ul style={memberList}>
          {
            this.props.chatMembers.map((member) => (
              <li
                key={member.globalProps.name}
                member={member.globalProps.name}
                style={singleMember}
              >
                {member.globalProps.name}
              </li>
            ))
          }
          <li style={singleMember}>Awaiting 3...</li>
        </ul>
      </div>
    );
  }
}

MemberPanel.propTypes = {
  chatMembers: PropTypes.object,
};

export default MemberPanel;
