import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import { verticalContainer, horizontalContainer } from '../DynamicStyles/common';

const fakeColorIcon = {
  width: 30,
  height: 30,
  backgroundColor: 'blue',
  border: '1px solid grey',
};
const inputWide = {
  height: 22,
  width: 200,
};
const inputMid = {
  ...inputWide,
  width: 100,
};
const inputSmall = {
  ...inputWide,
  width: 25,
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

class CustomizeTheme extends React.Component {
  static propTypes = {
    CurrentUser: PropTypes.object,
  };

  constructor() {
    super();
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
              <input style={{...inputWide, ...margR}} type="text"/>
            </div>
            <span style={{...margR, fontWeight: 700}}>OR</span>
            <span style={margR}>Color</span>
            <div style={{...fakeColorIcon, ...margR}}></div>
          </div>
          <div style={subTitle}>
            <label style={{...margR, ...params}}>Opacity:</label>
            <input style={{...inputSmall, marginRight: 10}} type="text"/>
            <span style={{fontWeight: 700}}>%</span>
          </div>
          <h4 style={subTitle}>Font:</h4>
          <div style={{...horizontalContainer, alignItems: 'center', ...subTitle}}>
            <span style={{...margR, ...params}}>Color:</span>
            <div style={{...fakeColorIcon, ...margR}}></div>
            <div>
              <label style={margR}>Family:</label>
              <input style={inputMid} type="text"/>
            </div>
          </div>
        </div>
        <h2 style={mainTitle}>Body</h2>
        <div style={verticalContainer}>
          <h4 style={subTitle}>Background:</h4>
          <div style={{...horizontalContainer, alignItems: 'center', ...subTitle}}>
            <div>
              <label style={{...margR, ...params}}>URL:</label>
              <input style={{...inputWide, ...margR}} type="text"/>
            </div>
            <span style={{...margR, fontWeight: 700}}>OR</span>
            <span style={margR}>Color</span>
            <div style={{...fakeColorIcon, ...margR}}></div>
          </div>
          <h4 style={subTitle}>Font:</h4>
          <div style={{...horizontalContainer, alignItems: 'center', ...subTitle}}>
            <span style={{...margR, ...params}}>Color:</span>
            <div style={{...fakeColorIcon, ...margR}}></div>
            <div>
              <label style={margR}>Family:</label>
              <input style={inputMid} type="text"/>
            </div>
          </div>
          <h4 style={subTitle}>Field:</h4>
          <div style={{...horizontalContainer, alignItems: 'center', ...subTitle}}>
            <span style={{...margR, ...params}}>Color:</span>
            <div style={{...fakeColorIcon, ...margR}}></div>
            <div>
              <label style={margR}>Opacity:</label>
              <input style={inputSmall} type="text"/>
            </div>
          </div>
        </div>
        <div style={{...horizontalContainer, justifyContent: 'center', ...subTitle}}>
          <button style={{height: 40, backgroundColor: 'green', color: 'white'}}>Done</button>
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
