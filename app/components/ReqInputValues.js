import React, { PropTypes } from 'react';

class ReqInputValues extends React.Component {
  static propTypes = {
    onSelect: PropTypes.func,
    type: PropTypes.string,
  };

  static defaultProps = {
    type: 'word',
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
        style={styles.inputStyle}
        type={this.props.type === 'word' ? 'text' : 'number'}
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
    backgroundColor: 'transparent',
    color: 'black',
    border: 'none',
    outline: '1px solid blue',
    paddingLeft: '0.5em',
  },
};

export default ReqInputValues;
