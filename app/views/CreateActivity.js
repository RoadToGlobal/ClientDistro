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
  }

  render() {
    return (
      <div style={FFFContainer}>
        <FFFWindow
          title={"Register new Activity"}
          header={Boolean(true)}
          specStyle={{height: '18em'}}>
          <RegisterActivity
            showCustomize={this.state.showCustomize}
            toggleCustomize={() => this.toggleCustomize()}
          />
        </FFFWindow>
        {this.state.showCustomize ?
        <FFFWindow
          title={"Customize theme"}
          header={Boolean(true)}
          specStyle={{height: '44em'}}>
          <CustomizeTheme
            showCustomize={this.state.showCustomize}
            toggleCustomize={() => this.toggleCustomize()}
          />
        </FFFWindow>
        : null}
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateActivity);
