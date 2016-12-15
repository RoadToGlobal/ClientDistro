import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import RegisterActivity from '../containers/RegisterActivity';
import CustomizeTheme from '../containers/CustomizeTheme';
import FFFWindow from '../containers/FFFWindow';
import { FFFContainer } from '../DynamicStyles/common';

class CreateActivity extends React.Component {
  static propTypes = {
    CurrentUser: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div style={FFFContainer}>
        <FFFWindow title={"Register new Activity:"} header={Boolean(true)}>
          <RegisterActivity />
        </FFFWindow>
        <FFFWindow title={"Customize theme:"} header={Boolean(true)}>
          <CustomizeTheme />
        </FFFWindow>
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
)(CreateActivity);
