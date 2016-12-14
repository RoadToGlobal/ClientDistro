import React from 'react';

import { FFFContainer} from '../DynamicStyles/common';
import FFFWindow from '../containers/FFFWindow';

export default class Group extends React.Component {
  render() {
    return (
      <div style={FFFContainer}>
        <FFFWindow title={'Activity Status'} header={Boolean(true)}>
          <p>
            pLaCeHoLdEr
          </p>
        </FFFWindow>
      </div>
   	);
  }
}
