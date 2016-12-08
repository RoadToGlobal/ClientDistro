import React from 'react';
import GroupMembers from '../containers/GroupMembers';
import { FFFContainer } from '../DynamicStyles/common';

export default class Group extends React.Component {
  render() {
    return (
      <div style={new FFFContainer}>
          <GroupMembers />
      </div>
   );
  }
}
