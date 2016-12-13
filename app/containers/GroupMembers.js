import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
// Uncomment this import when you're going to use ReactCSSTransitionGroup
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import UserCard from '../components/UserCard';
import {FFFWindow} from '../DynamicStyles/common';

const GroupMembersContainer = {
  margin: '0',
  display: 'flex',
  opacity: '1',
  transition: 'opacity 0.4s',
  flexDirection: 'row',
  justifyContent: 'space-around',
};

const extendedFFFWindow = {
  ...FFFWindow,
  height: '20em',
  //margin: '0',
  display: 'flex',
  transition: 'height 0.5s',
  flexDirection: 'column',
  overflow: 'hidden',
};

const GroupMembersHeader = {
  borderBottom: '1px solid #dddddd',
};
const GroupMembersTitle = {
  margin: '0',
};
const ToggleButton = {
  cursor: 'pointer',
};

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
      <div style={this.state.maximized ? extendedFFFWindow : {...extendedFFFWindow, height: '2em'}}>
        <header style={GroupMembersHeader}>
          <h1 style={GroupMembersTitle}>
            Members
            <a
              style={ToggleButton}
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
