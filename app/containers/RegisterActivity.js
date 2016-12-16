import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import GeneralButton from '../components/GeneralButton';
import { verticalContainer, horizontalContainer } from '../DynamicStyles/common';

const margR = {
  marginRight: 20,
};
const inputHeight = {
  height: 22,
};
const selectHeight = {
  height: 32,
};

class RegisterActivity extends React.Component {
  static propTypes = {
    CurrentUser: PropTypes.object,
    toggleCustomize: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{...verticalContainer, justifyContent: 'space-between', height: '14em'}}>
        <div style={{...horizontalContainer, marginTop: 10, flex: 3}}>
          <div style={margR}>
            <p>Activity prefix</p>
            <select style={selectHeight}>
              <option>Do the</option>
              <option>Play the</option>
            </select>
          </div>
          <div>
            <p>Activity name</p>
            <input style={inputHeight} type="text"/>
          </div>
        </div>
        <div style={{flex: 2}}>
          <p style={{margin: '0 0 10px 0'}}>Visibility status</p>
          <select style={selectHeight}>
            <option>Public</option>
            <option>Private</option>
          </select>
        </div>
        <div style={{...horizontalContainer, justifyContent: 'center', flex: 1}}>
          <GeneralButton
            onClick={this.props.toggleCustomize}
            buttonContent={'Customize Theme'}
            buttonStyle={margR}
          />
          <GeneralButton
            onClick={this.props.toggleCustomize}
            buttonContent={'Create'}
          />
        </div>
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
)(RegisterActivity);
