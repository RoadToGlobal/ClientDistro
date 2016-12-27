import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import GroupMembers from '../containers/GroupMembers';
import SignInButton from '../containers/SignInButton';
import GroupChat from '../containers/GroupChat';
import ActivityShare from '../containers/ActivityShare';
import ActivityStatusMini from '../containers/ActivityStatusMini';
import NotificationSettings from '../containers/NotificationSettings';
import EditProps from '../containers/EditProps';
import FFFWindow from '../containers/FFFWindow';
import { FFFContainer, horizontalContainer, FFFHalfWindowStyle } from '../DynamicStyles/common';

class Group extends React.Component {
  static propTypes = {
    CurrentUser: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div style={FFFContainer}>
        <FFFWindow title={"Members"} header={Boolean(true)}>
          <GroupMembers />
        </FFFWindow>
        { !this.props.CurrentUser.token ?
          <SignInButton />
         : null }
        <FFFWindow title={"Group Chat"} header={Boolean(true)}>
          <GroupChat />
        </FFFWindow>
        <ActivityShare />
        <div style={settingsContainer}>
          <FFFWindow title={""} header={Boolean(false)} specStyle={FFFHalfWindowStyle}>
            <NotificationSettings />
          </FFFWindow>
          <FFFWindow title={""} header={Boolean(false)} specStyle={FFFHalfWindowStyle}>
            <EditProps />
          </FFFWindow>
        </div>
        <FFFWindow title={"Activity Status"} header={Boolean(true)} specStyle={{height: '10em'}}>
          <ActivityStatusMini />
        </FFFWindow>
      </div>
   );
  }
}

const settingsContainer = {
  ...horizontalContainer,
  flexBasis: '100%',
  justifyContent: 'space-between',
};

const mapStateToProps = (state) => {
  return {
    CurrentUser: state.CurrentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (user) => dispatch(({
      type: 'CURRENT_USER_EXAMPLE',
      data: 'current user action triggered',
    }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Group);
