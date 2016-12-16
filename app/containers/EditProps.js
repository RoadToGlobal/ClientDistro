import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {verticalContainer, horizontalContainer} from '../DynamicStyles/common';

const editContainer = {
  ...verticalContainer,
  fontSize: '14px',
};

const editSelectStyle = {
  marginLeft: '10px',
  border: 'none',
};

class EditProps extends React.Component {
  static propTypes = {
    CurrentGroupSearch: PropTypes.object,
  };

  render() {
    return (
      <div style={editContainer}>
      <h3 style={{marginTop: '0'}}>Supply more details to increase your chanses of beeing found:</h3>
      <p>I am someone who is:
        <select style={editSelectStyle}>
          <option>
            aged
          </option>
        </select>
        <input value="22" style={{width: '1.4em', marginLeft: '10px'}}/>
      </p>
      <p>
        and
        <select style={editSelectStyle}>
          <option>
            speaks
          </option>
        </select>
        <select style={editSelectStyle}>
          <option>
            English
          </option>
        </select>
      </p>
      <p>
        and
        <select style={editSelectStyle}>
          <option>
            speaks
          </option>
        </select>
        <select style={editSelectStyle}>
          <option>
            Swedish
          </option>
        </select>
      </p>
      <p>
        and
        <select style={editSelectStyle}>
          <option>
            my email is
          </option>
        </select>
        <input value="supertester@email.com" style={{width: '8em', marginLeft: '10px'}}/>
      </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CurrentGroupSearch: state.CurrentGroupSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSettings: (settings) => (dispatch({
      type: 'CURRENT_GROUP_SEARCH_EXAMPLE',
      data: 'current group search action triggered',
    })),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProps);
