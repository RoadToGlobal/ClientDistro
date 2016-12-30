import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import GeneralButton from '../components/GeneralButton';
import GeneralInput from '../components/GeneralInput';
import { verticalContainer, horizontalContainer } from '../DynamicStyles/common';

const selectColorIcon = {
  width: 30,
  height: 30,
  backgroundColor: '#006aff',
  border: '1px solid #c2c2c2',
};
const inputWide = {
  height: 40,
  width: 200,
};
const inputMid = {
  ...inputWide,
  width: 100,
};
const inputSmall = {
  ...inputWide,
  width: 40,
};
const subTitle = {
  margin: '10px',
};
const mainTitle = {
  margin: '10px 0',
};
const params = {
  marginLeft: 5,
};
const margR = {
  marginRight: 20,
};
const saveButton = {
  backgroundColor: '#28b50e',
  color: '#fff',
};

class CustomizeTheme extends React.Component {
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
      <div style={verticalContainer}>
        <h2 style={mainTitle}>Header</h2>
        <div style={verticalContainer}>
          <h4 style={subTitle}>Background:</h4>
          <div style={{...horizontalContainer, alignItems: 'center', ...subTitle}}>
            <div>
              <label style={{...margR, ...params}}>URL:</label>
              <GeneralInput
                inputStyle={{...inputWide, ...margR}}
                inputType={'text'}
              />
            </div>
            <span style={{...margR, fontWeight: 700}}>OR</span>
            <span style={margR}>Color</span>
            <div style={{...selectColorIcon, ...margR}}></div>
          </div>
          <div style={subTitle}>
            <label style={{...margR, ...params}}>Opacity:</label>
            <GeneralInput
              inputStyle={{...inputSmall, marginRight: 10}}
              inputType={'text'}
            />
            <span style={{fontWeight: 700}}>%</span>
          </div>
          <h4 style={subTitle}>Font:</h4>
          <div style={{...horizontalContainer, alignItems: 'center', ...subTitle}}>
            <span style={{...margR, ...params}}>Color:</span>
            <div style={{...selectColorIcon, ...margR}}></div>
            <div>
              <label style={margR}>Family:</label>
              <GeneralInput
                inputStyle={inputMid}
                inputType={'text'}
              />
            </div>
          </div>
        </div>
        <h2 style={mainTitle}>Body</h2>
        <div style={verticalContainer}>
          <h4 style={subTitle}>Background:</h4>
          <div style={{...horizontalContainer, alignItems: 'center', ...subTitle}}>
            <div>
              <label style={{...margR, ...params}}>URL:</label>
              <GeneralInput
                inputStyle={{...inputWide, ...margR}}
                inputType={'text'}
              />
            </div>
            <span style={{...margR, fontWeight: 700}}>OR</span>
            <span style={margR}>Color</span>
            <div style={{...selectColorIcon, ...margR}}></div>
          </div>
          <h4 style={subTitle}>Font:</h4>
          <div style={{...horizontalContainer, alignItems: 'center', ...subTitle}}>
            <span style={{...margR, ...params}}>Color:</span>
            <div style={{...selectColorIcon, ...margR}}></div>
            <div>
              <label style={margR}>Family:</label>
              <GeneralInput
                inputStyle={inputMid}
                inputType={'text'}
              />
            </div>
          </div>
          <h4 style={subTitle}>Field:</h4>
          <div style={{...horizontalContainer, alignItems: 'center', ...subTitle}}>
            <span style={{...margR, ...params}}>Color:</span>
            <div style={{...selectColorIcon, ...margR}}></div>
            <div>
              <label style={margR}>Opacity:</label>
              <GeneralInput
                inputStyle={{...inputSmall, marginRight: 10}}
                inputType={'text'}
              />
              <span style={{fontWeight: 700}}>%</span>
            </div>
          </div>
        </div>
        <div style={{...horizontalContainer, justifyContent: 'center', margin: '10px 10px 0 10px'}}>
          <GeneralButton
            onClick={this.props.toggleCustomize}
            buttonContent={'Save customization'}
            buttonStyle={saveButton}
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
)(CustomizeTheme);
