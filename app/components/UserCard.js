import React, { PropTypes } from 'react';

const MemberCard = {
  margin: '10px',
  padding: '1em',
  boxShadow: '1px 1px 6px #888888',
  borderRadius: '3px',
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
        <p><b>Name:</b> {this.props.member.globalProps.name}</p>
        <p><b>Age:</b> {this.props.member.globalProps.age}</p>
      </div>
    );
  }
}

UserCard.propTypes = {
  member: PropTypes.object,
};

export default UserCard;
