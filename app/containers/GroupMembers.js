import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import UserCard from '../components/UserCard';
import {FFFWindow} from '../DynamicStyles/common';

class GroupMembersContainer extends FFFWindow {
  margin = '0';
  display = 'flex';
}
class GroupMembersHeader {
  backgroundColor = '#9c9c9c';
  width = '42em';
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

const styles = {
  active: {
    display: 'inherit'
  },
  inactive: {
    display: 'none'
  }
};

class GroupMembers extends React.Component {
  static propTypes = {
    CurrentGroup: PropTypes.object,
    fetchMembers: PropTypes.func,
  };
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const stateStyle = this.state.active ? styles.inactive : styles.active;
    return (
      <div>
        <div style={new GroupMembersHeader}>
          <h1 style={new GroupMembersTitle}>
            Members
            <a
              style={new ToggleButton}
              onClick={this.toggleVisibility}>
              {this.state.active ? ' +' : ' -'}
            </a>
          </h1>
        </div>
        <div style={stateStyle}>
          <div style={new GroupMembersContainer}>
            <div style={new MembersContainer}>
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
