import React, { PropTypes } from 'react';

// TODO: Add more links and "connect" to view

const icon = {
  marginBottom: 10.5,
  cursor: 'pointer',
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
  fontSize: 12,
  textAlign: 'center',
  transition: 'all 0.2s',
};
const iconTxtHover = {
  ...iconTxt,
  fontSize: 14,
};

class SideBarIcon extends React.Component {
  static propTypes = {
    activity: PropTypes.object,
    hoverStatus: PropTypes.bool,
    toggleHover: PropTypes.func,
    removeHover: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={this.props.hoverStatus ? {...iconItemHover, borderLeftColor: this.props.activity.style.backgroundColor}
          : {...iconItem, borderLeftColor: this.props.activity.style.backgroundColor}}
        onMouseOver={this.props.toggleHover}
        onMouseLeave={this.props.removeHover}
      >
        <img
          style={this.props.hoverStatus ? iconImgHover : iconImg}
          src="https://maxcdn.icons8.com/Color/PNG/512/Logos/overwatch-512.png"
         />
        <span
          style={this.props.hoverStatus ? iconTxtHover : iconTxt}
        >
          {this.props.activity.name}
        </span>
      </div>
    );
  }
}

export default SideBarIcon;
