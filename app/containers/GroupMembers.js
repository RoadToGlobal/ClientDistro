import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import UserCard from '../components/UserCard';
// import {FFFWindow} from '../DynamicStyles/common';
// ska extenda FFFWindow
const GroupMembersContainer = {
  margin: '0',
  display: 'flex',
  opacity: '1',
  transition: 'opacity 0.4s',
  flexDirection: 'row',
  justifyContent: 'space-around',
};

const FFFWindow = {
  backgroundColor: 'white',
  padding: '1em',
  width: '40em',
  height: '20em',
  color: '#333',
  margin: '0',
  display: 'flex',
  transition: 'height 0.5s',
  flexDirection: 'column',
  overflow: 'hidden',
};

class GroupMembersHeader {
  backgroundColor = '#9c9c9c';
  // width = '42em';
}
class GroupMembersTitle {
  margin = '0';
}
class MembersContainer {
  display = 'flex';
  justifyContent = 'center';
}
class ToggleButton {
  cursor = 'pointer';
}

class GroupMembers extends React.Component {
  static propTypes = {
    CurrentGroup: PropTypes.object,
    fetchMembers: PropTypes.func,
  };
  constructor() {
    super();
    this.state = {
      maximized: true
    };
  }

  toggleVisibility() {
    this.setState({
      maximized: !this.state.maximized
    });
  }

  render() {
    return (
      <div style={this.state.maximized ? FFFWindow : {...FFFWindow, height: '2em'}}>
        <header style={new GroupMembersHeader}>
          <h1 style={new GroupMembersTitle}>
            Members
            <a
              style={new ToggleButton}
              onClick={() => this.toggleVisibility()}>
              {this.state.maximized ? ' +' : ' -'}
            </a>
          </h1>
        </header>
        <div style={this.state.maximized ? GroupMembersContainer : {...GroupMembersContainer, opacity: '0'}}>
          <div style={{display: 'flex'}}>
            {
              this.props.CurrentGroup.members.map((member) => (
                <UserCard
                  key={member.name}
                  member={member}
                />
              ))
            }
            {this.props.CurrentGroup.members.length === 0 ? <p>No members to show</p> : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CurrentGroup: state.CurrentGroup
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMembers: (members) => dispatch(({
      type: 'CURRENT_GROUP_EXAMPLE',
      data: 'current group action triggered',
    }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupMembers);
