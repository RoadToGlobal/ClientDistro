import React, { PropTypes } from 'react';

class MagicInput extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    source: PropTypes.array,
    search: PropTypes.func,
    values: PropTypes.number,
    onSelect: PropTypes.func,
    prefix: PropTypes.string,
  };

  static defaultProps = {
    isLoading: false,
    source: [],
    values: 1,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: {name: '', prefix: ''},
      highlighted: false,
      value: '',
      focused: false,
    };
  }

  ComponentWillMount() {
    this.setState({source: this.props.source});
  }

  ComponentWillReceiveProps(nextProps) {
    this.setState({source: nextProps.source});
  }

  handleKeypress(event) {
    if (event.key === 'Enter' && this.state.highlighted) {
      this.select(this.state.highlighted);
    }
  }

  select(element) {
    if (element) {
      this.setState({selected: element, value: (element.prefix || '') + ' ' + element.name}, () => {
        this.refs.currentInput.blur();
        this.props.onSelect(element);
      });
    }
  }

  // TODO: add a interval or timer, dont send too many reqs
  handleChange(value) {
    this.setState({value});

    if (value){
      this.props.search(value);
    }
  }

  suggestionStyler(element){
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
        <label>{this.props.prefix || ''}</label>
        <div style={styles.main}>
          <input
            ref='currentInput'
            style={styles.inputStyle}
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
                  this.props.source.map((element) => (
                    <li
                      onMouseLeave={() => this.setState({highlighted: false})}
                      onMouseOver={() => this.setState({highlighted: element})}
                      onClick={() => this.select(element)}
                      key={element._id}
                      style={ this.suggestionStyler(element) }
                    >
                      {element.prefix || ''} {element.name}
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
    backgroundColor: 'transparent',
    color: 'black',
    border: 'none',
    outline: '1px solid orange',
    minWidth: '14em',
    paddingLeft: '0.5em',
  },
  wrapperStyle: {
    display: 'flex',
  },
};

export default MagicInput;
