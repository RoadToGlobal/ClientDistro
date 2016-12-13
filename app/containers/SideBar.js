import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import SideBarIcon from '../components/SideBarIcon';
import SideBarLinks from '../components/SideBarLinks';
import { verticalContainer } from '../DynamicStyles/common';

const sidebarStyle = {
  ...verticalContainer,
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
    Activities: PropTypes.array,
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
        <Link style={logotypeContainer} to="/"><img style={logotype} src="http://eigentaste.berkeley.edu/img/home_icon.png"/></Link>
        <div style={SideBarIconContainer}>
        {this.props.Activities.map((activity, index) => (
          <SideBarIcon
            key={activity.name}
            activity={activity}
            hoverStatus={this.state.hover === index}
            toggleHover={() => this.toggleHover(index)}
            removeHover={() => this.toggleHover(false)}
          />
        ))}
        </div>
        <SideBarLinks />
      </aside>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Activities: state.Activities,
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
