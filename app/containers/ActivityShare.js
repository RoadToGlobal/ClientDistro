import React from 'react';
import { Link } from 'react-router';
import ShareLine from '../components/ShareLine';
import FacebookIntegration from '../components/FacebookIntegration';
import DiscordIntegration from '../components/DiscordIntegration';
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
          <FacebookIntegration />
        </Link>
        <Link to="/">
          <DiscordIntegration />
        </Link>
        </div>
      </div>
    );
  }
}
const shareContainer = {
  ...FFFWindowStyle,
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
