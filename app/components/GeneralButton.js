import React, { PropTypes } from 'react';

// Pretty much only works with "small sign characters" else it'll look wierd

const generalButton = {
  display: 'inline-block',
  height: 40,
  border: 'none',
  backgroundColor: '#3c4959',
  color: '#fff',
  padding: '8px 16px',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 700,
  cursor: 'pointer',
};

class CloseButton extends React.Component {
  static propTypes = {
    buttonContent: PropTypes.string,
    buttonStyle: PropTypes.object,
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.onClick} style={{...generalButton, ...this.props.buttonStyle}}>{this.props.buttonContent}</button>
    );
  }
}

export default CloseButton;
