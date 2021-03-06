import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import GeneralButton from '../components/GeneralButton';
import GeneralInput from '../components/GeneralInput';
import { verticalContainer, horizontalContainer } from '../DynamicStyles/common';

const margR = {
  marginRight: 20,
};
const inputHeight = {
  height: 32,
};
const selectHeight = {
  height: 32,
};
const saveButton = {
  backgroundColor: '#28b50e',
  color: '#fff',
};
const fadedButton = {
  backgroundColor: '#c2c2c2',
  color: '#fff',
  opacity: '0.5',
  cursor: 'not-allowed',
};

class RegisterActivity extends React.Component {
  static propTypes = {
    CurrentUser: PropTypes.object,
    toggleCustomize: PropTypes.func,
    showCustomize: PropTypes.bool,
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
            <GeneralInput
              inputStyle={inputHeight}
              inputType={'text'}
            />
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
          {!this.props.showCustomize ?
            <GeneralButton
              onClick={this.props.toggleCustomize}
              buttonContent={'Customize Theme'}
              buttonStyle={margR}
            />
          : <GeneralButton
              onClick={this.props.toggleCustomize}
              buttonContent={'Save customization'}
              buttonStyle={{...margR, ...saveButton}}
            />
          }
          {!this.props.showCustomize ?
            <GeneralButton
              buttonContent={'Create'}
            />
          : <GeneralButton
              buttonContent={'Create'}
              buttonStyle={fadedButton}
            />
          }
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
