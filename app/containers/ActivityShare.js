import React from 'react';
import { Link } from 'react-router';

import GeneralButton from '../components/GeneralButton';
import ShareLine from '../components/ShareLine';
import {FFFWindowStyle} from '../DynamicStyles/common';

export default class ActivityShare extends React.Component {

  render() {
    return (
      <div style={shareContainer}>
        <div style={btnContainer}>
          <ShareLine />
        </div>
        <div style={rightBtnContainer}>
        <Link to="/">
          <GeneralButton
            buttonContent={'Create Facebook Group'}
            buttonStyle={pathBtns}
          />
        </Link>
        <Link to="/">
          <GeneralButton
            buttonContent={'Join Discord'}
            buttonStyle={pathBtns}
          />
        </Link>
        </div>
      </div>
    );
  }
}
const pathBtns = {
  borderRadius: '2px',
  backgroundColor: '#00bef2',
  border: '1px solid #68dafc',
  fontSize: '0.8em',
  color: 'white',
  height: '2.8em',
  marginRight: '1em',
  fontWeight: 'inherit',
  fontFamily: 'Nunito',
};
const shareContainer = {
  ...FFFWindowStyle,
  flexShrink: '0',
  boxShadow: 'none',
  backgroundColor: 'transparent',
  height: 'inherit',
  width: '42em',
  padding: '0',
  display: 'flex',
  flexDirection: 'row',
};
const btnContainer = {
  display: 'flex',
  flex: '1',
  justifyContent: 'flex-start',
  alignItems: 'center',
};
const rightBtnContainer = {
  ...btnContainer,
  justifyContent: 'flex-end',
};
