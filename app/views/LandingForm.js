import React from 'react';

import { FFFWindow } from '../DynamicStyles/common';
import { FFFContainer } from '../DynamicStyles/common';
import GroupSearchForm from '../containers/GroupSearchFrom';

export default class LandingForm extends React.Component {
  render() {
    return (
      <div style={new FFFContainer}>
        <GroupSearchForm/>
      </div>
    );
  }
}
