import React, { PropTypes } from 'react';

class MagicInput extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    source: PropTypes.array,
    search: PropTypes.func,
    onSelect: PropTypes.func,
    prefix: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    isLoading: false,
    source: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: {name: '', prefix: '', key: ''},
      highlighted: false,
      value: '',
      focused: false,
    };
  }

  componentWillMount() {
    this.setState({source: this.props.source});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({source: nextProps.source, highlighted: nextProps.source[0]});
  }

  handleKeypress(event) {
    if (event.key === 'Enter' && this.state.highlighted) {
      this.select(this.state.highlighted);
    }
  }

  select(element) {
    if (element) {
      this.setState({
        selected: element,
        value: (element.prefix ? element.prefix + ' ' : '') + (element.name || element.key)
      }, () => {
        this.refs.currentInput.blur();
        this.props.onSelect(element);
      });
    }
  }

  // TODO: add a interval or timer, dont send too many reqs
  handleChange(value) {
    this.setState({value});

    if (value) {
      this.props.search(value);
    }
  }

  suggestionStyler(element) {
    const base = {
      cursor: 'pointer',
      paddingBottom: '0.3em',
    };

    if (this.state.highlighted === element) {
      return {
        ...base,
        textDecoration: 'underline',
      };
    } else {
      return {
        ...base,
        textDecoration: 'none',
      };
    }
  }

  render() {
    return (
      <div style={{ ...styles.wrapperStyle, ...this.props.style }}>
        <label style={styles.prefixText}>{this.props.prefix || ''}</label>
        <div style={styles.main}>
          <input
            ref="currentInput"
            style={{
              ...styles.inputStyle,
              width: '' + Math.max(4, this.state.value.length * 1 + 2) + 'rem'
            }}
            value={this.state.value}
            onChange={(e) => this.handleChange(e.target.value)}
            onKeyPress={(e) => this.handleKeypress(e)}
            onFocus={(e) => this.setState({ focused: true })}
            onBlur={(e) => {
              this.setState({
                focused: false,
              }, this.select(this.state.highlighted));
            }}
          />
          <div style={styles.anchorStyle}>
            {
              this.state.focused ?
              <div style={styles.autofillStyle}>
                <ul style={{
                  margin: '0',
                  padding: '0.5em',
                  listStyle: 'none',
                }}>
                { this.props.isLoading ?
                  <li>loading...</li>
                  :
                  this.props.source.map((element, index) => (
                    <li
                      onMouseLeave={() => this.setState({highlighted: false})}
                      onMouseOver={() => this.setState({highlighted: element})}
                      onClick={() => this.select(element)}
                      key={element.name || element.key || index}
                      style={this.suggestionStyler(element)}
                    >
                      {element.prefix || ''} {element.name || ''} {element.key || ''}
                    </li>
                  ))
                }
              </ul>
            </div>
              : null}
            </div>
          </div>
        </div>
    );
  }
}

const styles = {
  main: {
    marginLeft: '0.5em',
  },
  anchorStyle: {
    position: 'relative',
  },
  autofillStyle: {
    backgroundColor: 'white',
    boxShadow: '4px 4px 10px rgba(0, 0, 0,0.5)',
    position: 'absolute',
    minWidth: '14em',
  },
  inputStyle: {
    marginRight: '0.5em',
    backgroundColor: 'rgba(0,0,0,0.05)',
    textAlign: 'center',
    color: 'black',
    border: 'none',
    borderBottom: '2px solid #acf',
    fontSize: '1.5rem',
    height: '2em',
    borderRadius: '3px',
  },
  wrapperStyle: {
    display: 'flex',
  },
  prefixText: {
    fontSize: '2.5em',
  },
};

export default MagicInput;
