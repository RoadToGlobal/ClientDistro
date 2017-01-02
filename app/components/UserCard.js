import React, { PropTypes } from 'react';

class UserCard extends React.Component {
  static propTypes = {
    application: PropTypes.object,
  }

  render() {
    return (
      <div style={MemberCard}>
        <div style={imageContainer}>
          <img
            style={ProfileImage}
            src={this.props.application.member.globalProps.imgUrl}
          />
        </div>
        <div style={userContentContainer}>
          <span><b>Username:</b> {this.props.application.member.username }</span>
          <ul style={localProps}>
            {this.props.application.localProps.map((prop) => (
              <li><b>{prop.key + ': '}</b>{prop.value}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const localProps = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const MemberCard = {
  margin: '10px',
  padding: '1em',
  boxShadow: '1px 1px 6px #888888',
  borderRadius: '3px',
  flexShrink: '1',
  maxHeight: '15.4em',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};

const imageContainer = {
  flex: '1',
};
const userContentContainer = {
  flex: '1',
};

const ProfileImage = {
  width: '8em',
  height: 'auto',
};

export default UserCard;
