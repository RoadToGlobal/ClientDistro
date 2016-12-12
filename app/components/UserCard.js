import React from 'react';

const MemberCard = {
  margin: '10px',
  borderStyle: 'solid',
  borderColor: '#000',
  flexShrink: '1',
};
const ProfileImage = {
  width: '8em',
  height: 'auto',
};

class UserCard extends React.Component {
  render() {
    return (
      <div style={MemberCard}>
        <img
          style={ProfileImage}
          src={this.props.member.globalProps.imgUrl}
        />
        <p> Name: {this.props.member.globalProps.name}</p>
        <p> Age: {this.props.member.globalProps.age}</p>
      </div>
    );
  }
}

export default UserCard;
