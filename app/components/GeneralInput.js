import React, { PropTypes } from 'react';

const generalInput = {
  fontFamily: 'Nunito',
  padding: 0,
  border: '1px solid rgba(60, 73, 89, 0.3)',
  boxSizing: 'border-box',
};

class GeneralInput extends React.Component {
  static propTypes = {
    inputType: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    inputValue: PropTypes.string,
    inputStyle: PropTypes.object,
    inputRef: PropTypes.string,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  handleKeypress(event) {
    if (event.key === 'Enter') {
      this.props.onEnter(event);
    }
  }

  render() {
    return (
      <input
        style={{...generalInput, ...this.props.inputStyle}}
        type={this.props.inputType}
        value={this.props.inputValue}
        placeholder={this.props.inputPlaceholder}
        ref={this.props.inputRef}
        onChange={this.props.onChange}
        onKeyPress={(e) => this.handleKeypress(e)}
      />
    );
  }
}

export default GeneralInput;
