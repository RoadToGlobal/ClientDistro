import React from 'react';
import { Link } from 'react-router';
// Use this import when you're going to use proptypes
// import React, { PropTypes } from 'react';

const footerLinks = {
  color: '#fff',
  textDecoration: 'none',
};
const linksContainer = {
  maxHeight: '12em',
  backgroundColor: '#3c4959',
  width: '5em',
  bottom: '0px',
  textAlign: 'center',
  alignItems: 'flex-start',
  textDecoration: 'none',
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
        <Link to="/createactivity" style={footerLinks}><h3>Create Activity</h3></Link>
        <Link to="/FAQ" style={footerLinks}><h3>FAQ</h3></Link>
        <Link to="/about" style={footerLinks}><h3>About</h3></Link>
      </div>
    );
  }
}

export default SideBarLinks;
