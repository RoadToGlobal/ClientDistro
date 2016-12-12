import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import SideBarIcon from '../components/SideBarIcon';
import SideBarLinks from '../components/SideBarLinks';
import { verticalContainer } from '../DynamicStyles/common';

class sidebarStyle extends verticalContainer {
  flexShrink = 1;
  color = '#000';
  backgroundColor = '#fff';
}

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
<<<<<<< Updated upstream
      <aside style={new sidebarStyle}>
        <h1><a href="#"> LOGGA </a></h1>
=======
      <aside style={sidebarStyle}>
        <h1><Link to="/">Logo</Link></h1>
>>>>>>> Stashed changes
        {this.props.Activities.map((activity, index) => (
          <SideBarIcon
            key={activity.name}
            activity={activity}
            hoverStatus={this.state.hover === index}
            toggleHover={() => this.toggleHover(index)}
            removeHover={() => this.toggleHover(false)}
          />
        ))}
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
