import React from 'react';

class MemberCard {
  margin = '10px';
  width = '10em';
  borderStyle = 'solid';
  borderColor = '#000';
}
class ProfileImage {
  width = '8em';
  height = 'auto';
}

class UserCard extends React.Component {
  render() {
    return (
      <div style={new MemberCard}>
        <img
          style={new ProfileImage}
          src={this.props.member.globalProps.imgUrl}
        />
        <p> Name: {this.props.member.globalProps.name}</p>
        <p> Age: {this.props.member.globalProps.age}</p>
      </div>
    );
  }
}

export default UserCard;
