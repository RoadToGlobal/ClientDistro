import React, { PropTypes } from 'react';

import MagicInput from './MagicInput';
import ReqInputValues from './ReqInputValues';

class RequirementSection extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    onSelect: PropTypes.func,
    reqs: PropTypes.array,
  };

  static defaultProps = {
    isLoading: false,
    reqs: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      reqs: [],
      slots: [props.reqs[0] || 'no reqs found'],
    };
  }

  componentWillMount() {
    this.setState({reqs: this.props.reqs});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({reqs: nextProps.reqs});
  }

  select() {
    this.props.onSelect(this.state.slots);
  }

  render() {
    return (
      <section style={styles.col}>
        <p>With someone</p>
        {
          this.state.slots.map((slotReq, slotIndex, slots) => (
            <div style={styles.row}>
              <MagicInput
                prefix='who'
                source={this.state.reqs}
                onSelect={(req) => {
                  slots[slotIndex] = req;
                  this.setState({slots: slots});
                }}
                search={(query) => {
                  const regEx = new RegExp(query, 'i');
                  let reqs = this.props.reqs.filter((req) => (req.name.match(regEx) !== null));
                  this.setState({reqs});
                }}
              />
              {
                slotReq.inputValues.map((val, valIndex) => (
                  <ReqInputValues
                    type={slotReq.type}
                    onSelect={(val) => {
                      let slots = this.state.slots;
                      slots[slotIndex].inputValues[valIndex] = '' + val;
                      this.setState({slots}, () => this.select())
                    }}
                  />
                ))
              }
              <span
                style={styles.chainStyle}
                onClick={(e) => this.setState({slots: [ ...this.state.slots, this.props.reqs[0] ]})}
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
  },
  chainStyle: {
    color: '#999',
    cursor: 'pointer',
  }
};

export default RequirementSection;
