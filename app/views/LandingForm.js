import React from 'react';

import { FFFContainer } from '../DynamicStyles/common';
import GroupSearchForm from '../containers/GroupSearchForm';
import FFFWindow from '../containers/FFFWindow';

export default class LandingForm extends React.Component {
  render() {
    return (
      <div style={FFFContainer}>
        <FFFWindow title={'GroupSearchForm'} header={Boolean(true)}>
          <GroupSearchForm/>
        </FFFWindow>
      </div>
    );
  }
}
