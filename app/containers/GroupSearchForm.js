import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import GeneralSpinner from '../components/GeneralSpinner';

const suggestionList = {
  backgroundColor: 'white',
  listStyle: 'none',
  border: '1px solid #dfdfdf',
  margin: '0',
  padding: '0',
  position: 'absolute',
  width: '20em',
};

const userInputContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const singleRowContainer = {
  display: 'flex',
  flexDirection: 'row',
};

const toggleFilterDisplay = {
  show: {
    display: 'block',
  },
  hide: {
    display: 'none',
  }
};

class GroupSearchForm extends React.Component {
  static propTypes = {
    foundActivities: PropTypes.object,
    Props: PropTypes.array,
    Reqs: PropTypes.array,
    SearchActivities: PropTypes.func,
    SearchProps: PropTypes.func,
    SearchReqs: PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      userInput: '',
      selectedActivity: false,
      toggleShow: false,
    };
  }

  handleOnChange = (event) => {
    this.props.indexActivities(event.currentTarget.value);
    this.setState({userInput: event.currentTarget.value});
    if(event.currentTarget.value === '') {
      this.setState({toggleShow: false});
    } else {
      this.setState({toggleShow: true});
    }
  }

  render() {
    return (
      <div>
        <p>
          Fill the empty fields below and tur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore dancing in the moonlight for fun, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. Join us today and meet strangers.
        </p>
        <div style={singleRowContainer}>
          <p>I want to: </p>
          <div style={{...userInputContainer, width: '20em', marginLeft: '10px'}}>
            <div style={userInputContainer}>
              {
                this.state.selectedActivity ?
                  <input
                    value={this.state.selectedActivity.prefix + ' ' + this.state.selectedActivity.name}
                    onChange={() => this.setState({selectedActivity: false})}
                  />
                :
                  <input onChange={this.handleOnChange} />
              }
            </div>
            <div>
              <ul
                style={
                  this.state.toggleShow ?
                  {...suggestionList, ...toggleFilterDisplay.show}
                  :
                  {...suggestionList, ...toggleFilterDisplay.hide}
                }
               >
                { this.props.foundActivities.isLoading ? <li>loading...</li> :
                  this.props.foundActivities.results.map((activity) => {
                    return (
                      <li
                        onClick={() => this.setState({selectedActivity: activity})}
                        key={activity._id}
                      >
                        {activity.prefix} {activity.name}
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <button
          onClick={this.props.SearchProps}
        >
          SearchProps
        </button>
        <button
          onClick={this.props.SearchReqs}
        >
          SearchReqs
        </button>
        <button
          onClick={() => this.props.indexActivities()}
        >
          SearchActivities
        </button>
        <button
          onClick={() => this.props.joinActivity({activity: this.state.selectedActivity, requirements: {}, localProps: {} })}
        >
          JoinActivity
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    foundActivities: state.foundActivities,
    Props: state.Props,
    Reqs: state.Reqs,
    CurrentActivity: state.CurrentActivity,
  };
};

const mapDispatchToProps = {
  indexActivities: actions.activities.index,
  joinActivity: actions.activities.join,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupSearchForm);
