import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class SideBarLinks extends React.Component {
  static propTypes = {

  }
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h1><Link to="/group">Group</Link></h1>
        <h1>More</h1>
      </div>
    );
  }
}

export default SideBarLinks;
