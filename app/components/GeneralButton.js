import React, { PropTypes } from 'react';

const generalButton = {
  display: 'inline-block',
  height: 40,
  border: 'none',
  backgroundColor: '#3c4959',
  color: '#fff',
  padding: '8px 16px',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '1em',
  fontWeight: 700,
  cursor: 'pointer',
};

class GeneralButton extends React.Component {
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

export default GeneralButton;
