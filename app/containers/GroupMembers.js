import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
// Uncomment this import when you're going to use ReactCSSTransitionGroup
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import UserCard from '../components/UserCard';

class GroupMembers extends React.Component {
  static propTypes = {
    CurrentGroup: PropTypes.object,
  };

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {
          this.props.CurrentGroup.group.applications.map((application) => (
            <UserCard
              key={application.member.username}
              application={application}
            />
          ))
        }
        {this.props.CurrentGroup.group.applications.length === 0 ? <p>No members to show</p> : null}
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupMembers);
