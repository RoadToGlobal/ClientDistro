import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import GeneralSpinner from '../components/GeneralSpinner';
import SideBarIcon from '../components/SideBarIcon';
import SideBarLinks from '../components/SideBarLinks';
import { verticalContainer, shadowCaster } from '../DynamicStyles/common';

// TODO: Icon pagination
// TODO: Connect icons to groups
const sidebarStyle = {
  ...verticalContainer,
  ...shadowCaster,
  position: 'fixed',
  height: '100vh',
  // display: 'flex',
  fontWeight: '300',
  color: '#ffffff',
  backgroundColor: '#3c4959',
  width: '5em',
};
const logotype = {
  width: '55%',
};
const logotypeContainer = {
  maxHeight: '5em',
  textAlign: 'center',
  marginBottom: '0.8em',
  marginTop: '0.8em',
};
const sideBarIconContainer = {
  flex: 1,
  overflow: 'hidden',
};
const scrollHider = {
  overflowY: 'scroll',
  overflowX: 'hidden',
  maxHeight: '100%',
  width: '5.6em', //hides on firefox TODO: cross-browser fix hide scrollbar
};

class SideBar extends React.Component {
  static propTypes = {
    CurrentUser: PropTypes.object,
    myGroups: PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      hover: false
    };
  }

  toggleHover(index) {
    this.setState({
      hover: index
    });
  }

  render() {
    return (
      <aside style={sidebarStyle}>
        <Link style={logotypeContainer} to="/">
          <img style={logotype} src="http://eigentaste.berkeley.edu/img/home_icon.png"/>
        </Link>
        <div style={sideBarIconContainer}>
          <div style={scrollHider}>
            {this.props.myGroups.groups.map((group, index) => (
              <SideBarIcon
                link={'/group/' + group._id}
                key={group._id}
                activity={group.parentActivity}
                hoverStatus={this.state.hover === index}
                toggleHover={() => this.toggleHover(index)}
                removeHover={() => this.toggleHover(false)}
              />
            )) : null
          }
          {this.props.CurrentUser.isLoading ? <GeneralSpinner spinnerStyle={{transform: 'scale(1)'}}/> : null}
          </div>
        </div>
        <SideBarLinks />
      </aside>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CurrentUser: state.CurrentUser,
    myGroups: state.myGroups,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
