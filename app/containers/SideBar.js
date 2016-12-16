import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import SideBarIcon from '../components/SideBarIcon';
import SideBarLinks from '../components/SideBarLinks';
import { verticalContainer, shadowCaster } from '../DynamicStyles/common';

// TODO: Icon pagination
// TODO: Connect icons to groups

const sidebarStyle = {
  ...verticalContainer,
  ...shadowCaster,
  flexShrink: '1',
  display: 'flex',
  color: '#ffffff',
  backgroundColor: '#3c4959',
  width: '5em',
  fontWeight: '300',
};
const logotype = {
  width: '55%',
};
const logotypeContainer = {
  textAlign: 'center',
  marginBottom: '0.8em',
  marginTop: '0.8em',
};
const SideBarIconContainer = {

};

class SideBar extends React.Component {
  static propTypes = {
    CurrentUser: PropTypes.object,
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
        <div style={SideBarIconContainer}>
          {
            !this.props.CurrentUser.error && !this.props.CurrentUser.isLoading ?
            this.props.CurrentUser.groupSearches.map((groupSearch, index) => (
              <SideBarIcon
                key={groupSearch.activity.name}
                activity={groupSearch.activity}
                hoverStatus={this.state.hover === index}
                toggleHover={() => this.toggleHover(index)}
                removeHover={() => this.toggleHover(false)}
              />
            )) : <p> Spinner </p>
          }
        </div>
        <SideBarLinks />
      </aside>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CurrentUser: state.CurrentUser,
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
