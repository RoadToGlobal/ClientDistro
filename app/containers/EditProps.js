import React from 'react';
import {verticalContainer} from '../DynamicStyles/common';

const editContainer = {
  ...verticalContainer,
  fontSize: '14px',
};

const editSelectStyle = {
  marginLeft: '10px',
};

export default class EditProps extends React.Component {

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
