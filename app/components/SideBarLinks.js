import React from 'react';
import { Link } from 'react-router';
// Use this import when you're going to use proptypes
// import React, { PropTypes } from 'react';

const footerLinks = {
  color: '#fff',
  textDecoration: 'none',
};
const linksContainer = {
  backgroundColor: '#3c4959',
  width: '5em',
  position: 'fixed',
  bottom: '0px',
  textAlign: 'center',
  alignItems: 'flex-start',
};
class SideBarLinks extends React.Component {
  static propTypes = {

  }
  constructor() {
    super();
  }

  render() {
    return (
      <div style={linksContainer}>
        <h3 style={footerLinks}>About</h3>
        <Link to="/group/1234"><h3 style={footerLinks}>Group</h3></Link>
        <Link to="/createactivity"><h3 style={footerLinks}>Create Activity</h3></Link>
        <h3 style={footerLinks}>More</h3>
      </div>
    );
  }
}

export default SideBarLinks;
