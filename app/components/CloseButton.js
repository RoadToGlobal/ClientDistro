import React, { PropTypes } from 'react';

const closeButton = {
  float: 'right',
  cursor: 'pointer',
  color: '#fff',
  borderRadius: 30,
  background: '#3c4959',
  fontSize: 31,
  fontWeight: 700,
  display: 'inline-block',
  lineHeight: 0,
  padding: '14px 6px',
};
//Pretty much only works with "small sign characters" else it'll look wierd
class CloseButton extends React.Component {
  static propTypes = {
    buttonContent: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.buttonContent);
    return (
      <div style={closeButton}>{this.props.buttonContent}</div>
    );
  }
}

export default CloseButton;
