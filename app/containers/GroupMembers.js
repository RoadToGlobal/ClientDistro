import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
// Uncomment this import when you're going to use ReactCSSTransitionGroup
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import UserCard from '../components/UserCard';

class GroupMembers extends React.Component {
  static propTypes = {
    CurrentGroup: PropTypes.object,
    fetchMembers: PropTypes.func,
  };

  render() {
    return (
      <div style={{display: 'flex', alignSelf: 'center'}}>
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
