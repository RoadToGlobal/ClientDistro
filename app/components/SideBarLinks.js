import React, { PropTypes } from 'react';

class SideBarLinks extends React.Component {
  static propTypes = {

  }
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <a href="#"><h1>About</h1></a>
        <a href="#"><h1>Group</h1></a>
        <a href="#"><h1>More</h1></a>
      </div>
    );
  }
}

export default SideBarLinks;
