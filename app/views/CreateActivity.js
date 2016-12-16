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

  constructor() {
    super();
    this.state = {
      showCustomize: false,
    };
  }

  toggleCustomize() {
    this.setState({
      showCustomize: !this.state.showCustomize
    });
    console.log(this.state.showCustomize);
  }

  render() {
    return (
      <div style={FFFContainer}>
        <FFFWindow
          title={"Register new Activity"}
          header={Boolean(true)}
          specStyle={{height: 'inherit'}}>
          <RegisterActivity toggleCustomize={() => this.toggleCustomize()} />
        </FFFWindow>
        <FFFWindow
          title={"Customize theme"}
          header={Boolean(true)}
          specStyle={{height: 'inherit'}}>
          {this.state.showCustomize ?
          <CustomizeTheme toggleCustomize={() => this.toggleCustomize()} />
          : null}
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
