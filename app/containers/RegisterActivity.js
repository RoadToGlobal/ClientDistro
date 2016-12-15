import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
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
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div style={{...verticalContainer, justifyContent: 'space-between', height: '16em'}}>
        <div style={{...horizontalContainer}}>
          <div style={margR}>
            <p>Activity prefix</p>
            <select style={selectHeight}>
              <option>Do the</option>
            </select>
          </div>
          <div>
            <p>Activity name</p>
            <input style={inputHeight} type="text"/>
          </div>
        </div>
        <div style={{}}>
          <p style={{margin: '0 0 10px 0'}}>Visibility status</p>
          <select style={selectHeight}>
            <option>Public</option>
            <option>Private</option>
          </select>
        </div>
        <div style={{...horizontalContainer, justifyContent: 'center'}}>
          <button style={{...margR, height: 40}}>Customize Colors</button>
          <button style={{height: 40}}>Create</button>
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
