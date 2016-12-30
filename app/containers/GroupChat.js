import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import MemberPanel from '../components/MemberPanel';
import Chat from '../components/Chat';
import SendLine from '../components/SendLine';
// Uncomment this import when you're going to use ReactCSSTransitionGroup
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const chatLeft = {
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  height: '18em',
};
const chatRight = {
  display: 'flex',
  flexDirection: 'column',
  flex: '5',
};

class GroupChat extends React.Component {
  static propTypes = {
    CurrentGroup: PropTypes.object,
    fetchMembers: PropTypes.func,
  };

  render() {
    let members = this.props.CurrentGroup.group.applications.map((application) =>{
      return application.member;
    });

    return (
      <div style={{display: 'flex'}}>
        <div style={chatLeft}>
          <MemberPanel members={members}/>
        </div>

        <div style={chatRight}>
          <Chat />
          <SendLine />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CurrentGroup: state.CurrentGroup
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupChat);
