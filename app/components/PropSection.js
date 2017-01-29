import React, { PropTypes } from 'react';

import MagicInput from './MagicInput';
import PropInput from './PropInput';

class PropSection extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    onSelect: PropTypes.func,
    availableProps: PropTypes.array,
  };

  static defaultProps = {
    isLoading: false,
    availableProps: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      availableProps: [],
      slots: [props.availableProps[0] || 'no availableProps found'],
    };
  }

  componentWillMount() {
    this.setState({availableProps: this.props.availableProps});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({availableProps: nextProps.availableProps});
  }

  select() {
    this.props.onSelect(this.state.slots);
  }

  render() {
    return (
      <section style={styles.col}>
        <p>I am someone who</p>
        {
          this.state.slots.map((slotProp, slotIndex, slots) => (
            <div style={styles.row}>
              <MagicInput
                prefix="who"
                source={this.state.availableProps}
                onSelect={(p) => {
                  slots[slotIndex] = p;
                  this.setState({slots: slots});
                }}
                search={(query) => {
                  const regEx = new RegExp(query, 'i');
                  const availableProps = this.props.availableProps.filter((p) => (p.key.match(regEx) !== null));
                  this.setState({availableProps});
                }}
              />

              <PropInput
                type={slotProp.type}
                onSelect={(val) => {
                  const slots = this.state.slots;
                  slots[slotIndex].value = '' + val;
                  this.setState({slots}, () => this.select());
                }}
              />

              <span
                style={styles.chainStyle}
                onClick={(e) => this.setState({slots: [ ...this.state.slots, this.props.availableProps[0] ]})}
                onMouseOver={(e) => e.currentTarget.style = 'color: black; cursor: pointer;'}
                onMouseLeave={(e) => e.currentTarget.style = 'color: #999; cursor: pointer;'}
              >
                and
              </span>
            </div>
          ))
        }
      </section>
    );
  }
}

const styles = {
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30em',
  },
  row: {
    marginBottom: '0.5em',
    display: 'flex',
    flexDirection: 'row',
    minHeight: '3em',
  },
  chainStyle: {
    color: '#999',
    cursor: 'pointer',
  }
};

export default PropSection;
