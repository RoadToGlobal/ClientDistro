import React from 'react';
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
        <a href="#" style={footerLinks}><h3>About</h3></a>
        <a href="#" style={footerLinks}><h3>Group</h3></a>
        <a href="#" style={footerLinks}><h3>More</h3></a>
      </div>
    );
  }
}

export default SideBarLinks;
