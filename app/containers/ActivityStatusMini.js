import React from 'react';
// import {connect} from 'react-redux';
// Uncomment this import when you're going to use ReactCSSTransitionGroup
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import UserCard from '../components/UserCard';

export default class ActivityStatusMini extends React.Component {

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{textAlign: 'center'}}>
          <p><b>200</b> currently searching groups in this activity</p>
          <p><b>10 000</b> seeking groups on GroupApp</p>
          <p><b>500</b> currently online</p>
        </div>
      </div>
    );
  }
}
