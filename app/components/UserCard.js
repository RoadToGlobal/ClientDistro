import React from 'react';

class userCard {
  display = 'inline-block';
  margin = '10px';
  width = '10em';
  borderStyle = 'solid';
  borderColor = '#000';
}
class profileImage {
  width = '8em';
  height = 'auto';
}

class UserCard extends React.Component {
  render() {
    return (
      <div style={new userCard}>
        <img
          style={new profileImage}
          src={this.props.member.globalProps.imgUrl}
        />
        <p> Name: {this.props.member.globalProps.name}</p>
        <p> Age: {this.props.member.globalProps.age}</p>
      </div>
    );
  }
}

export default UserCard;
