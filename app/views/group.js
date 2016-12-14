import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import GroupMembers from '../containers/GroupMembers';
import SignInButton from '../containers/SignInButton';
import FFFWindow from '../containers/FFFWindow';
import { FFFContainer } from '../DynamicStyles/common';

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
        { this.props.CurrentUser.token === 'exampleToken' ?
          <SignInButton />
         : null }
      </div>
   );
  }
}

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
