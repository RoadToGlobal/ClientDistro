import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// TODO: Add more links and "connect" to view

const icon = {
  marginBottom: 10.5,
  borderLeftWidth: '5px',
  borderLeftStyle: 'solid',
};
const iconItem = {
  ...icon,
  opacity: 0.5,
  transition: 'all 0.5s',
};
const iconItemHover = {
  ...icon,
  opacity: 1,
  transition: 'all 0.5s',
};
const iconImg = {
  display: 'block',
  margin: '0 auto',
  marginBottom: 5,
  width: 50,
  transition: 'all 0.2s',
};
const iconImgHover = {
  ...iconImg,
  width: 75,
};

const iconTxt = {
  display: 'block',
  color: 'white',
  fontSize: 12,
  textAlign: 'center',
  transition: 'all 0.2s',
  textDecoration: 'none',
};

const iconTxtHover = {
  color: 'white',
  ...iconTxt,
  fontSize: 14,
  textDecoration: 'none',
};

class SideBarIcon extends React.Component {
  static propTypes = {
    activity: PropTypes.object,
    hoverStatus: PropTypes.bool,
    toggleHover: PropTypes.func,
    removeHover: PropTypes.func,
    link: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link
        style={{textDecoration: 'none'}}
        to={this.props.link}
      >
        <div
          style={this.props.hoverStatus ? {...iconItemHover, borderLeftColor: this.props.activity.style.backgroundColor}
            : {...iconItem, borderLeftColor: this.props.activity.style.backgroundColor}}
          onMouseOver={this.props.toggleHover}
          onMouseLeave={this.props.removeHover}
        >
          {/* src={this.props.activity.style.icon} */}
          <img
            style={this.props.hoverStatus ? iconImgHover : iconImg}
            src={'http://i.imgur.com/Zd41RUt.png'}
          />

          <span
            style={this.props.hoverStatus ? iconTxtHover : iconTxt}
          >
            {this.props.activity.prefix} {this.props.activity.name}
          </span>
        </div>
      </Link>
    );
  }
}

export default SideBarIcon;
