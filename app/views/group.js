import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions         from '../redux/actions';
import GeneralSpinner       from '../components/GeneralSpinner';
import GroupMembers         from '../containers/GroupMembers';
import SignInButton         from '../containers/SignInButton';
import GroupChat            from '../containers/GroupChat';
import ActivityShare        from '../containers/ActivityShare';
import ActivityStatusMini   from '../containers/ActivityStatusMini';
import NotificationSettings from '../containers/NotificationSettings';
import EditProps            from '../containers/EditProps';
import FFFWindow            from '../containers/FFFWindow';
import {
  FFFContainer,
  horizontalContainer,
  FFFHalfWindowStyle
} from '../DynamicStyles/common';

class Group extends React.Component {
  static propTypes = {
    CurrentUser: PropTypes.object.isRequired,
  };

  componentWillMount() {
    console.log(this.props.params.groupId);
    this.props.readGroup(this.props.params.groupId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.groupId !== this.props.params.groupId) {
      this.props.readGroup(nextProps.params.groupId);
    }
  }

  render() {
    if (this.props.CurrentGroup.isLoading || this.props.CurrentGroup.error) {
      return ( <GeneralSpinner/> );
    }

    return (
      <div style={FFFContainer}>
        <FFFWindow title={"Members"} header={true}>
          <GroupMembers />
        </FFFWindow>

        { this.props.CurrentUser.token ?
          <SignInButton />
          :
          null
        }

        <FFFWindow title={"Group Chat"} header={true}>
          <GroupChat />
        </FFFWindow>

        <ActivityShare />

        <div style={settingsContainer}>
          <FFFWindow title={""} header={false} specStyle={FFFHalfWindowStyle}>
            <NotificationSettings />
          </FFFWindow>

          <FFFWindow title={""} header={false} specStyle={FFFHalfWindowStyle}>
            <EditProps />
          </FFFWindow>
        </div>

        <FFFWindow title={"Activity Status"} header={true} specStyle={{height: '10em'}}>
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
    CurrentUser: state.CurrentUser,
    CurrentGroup: state.CurrentGroup,
  };
};

const mapDispatchToProps = {
  readGroup: actions.groups.readGroup,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Group);
