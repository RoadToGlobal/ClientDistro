import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import { FFFWindowStyle, verticalContainer } from '../DynamicStyles/common';

const style = {

};


class CustomizeTheme extends React.Component {
  static propTypes = {
    CurrentUser: PropTypes.object,
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CurrentUser: state.CurrentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizeTheme);
