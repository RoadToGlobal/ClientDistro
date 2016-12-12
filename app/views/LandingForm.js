import React from 'react';

import { FFFContainer } from '../DynamicStyles/common';
import GroupSearchForm from '../containers/GroupSearchFrom';

export default class LandingForm extends React.Component {
  render() {
    return (
      <div style={FFFContainer}>
        <GroupSearchForm/>
      </div>
    );
  }
}
