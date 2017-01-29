import React, { PropTypes } from 'react';

class PropInput extends React.Component {
  static propTypes = {
    onSelect: PropTypes.func,
    type: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleKeypress(event) {
    if (event.key === 'Enter' && this.state.value) {
      this.props.onSelect(this.state.value);
    }
  }

  handleChange(value) {
    this.setState({value});
  }

  render() {
    return (
      <input
        style={{
          ...styles.inputStyle,
          width: '' + Math.max(4, this.state.value.length * 1 + 2) + 'rem'
        }}
        type="text"
        value={this.state.value}
        onChange={(e) => this.handleChange(e.target.value)}
        onKeyPress={(e) => this.handleKeypress(e)}
        onBlur={(e) => {
          this.props.onSelect(this.state.value);
        }}
      />
    );
  }
}

const styles = {
  inputStyle: {
    marginRight: '0.5em',
    backgroundColor: 'rgba(0,0,0,0.05)',
    textAlign: 'center',
    color: 'black',
    border: 'none',
    borderBottom: '2px solid #9ba',
    height: '2em',
    borderRadius: '3px',
    fontSize: '1.5rem',
  },
};

export default PropInput;
