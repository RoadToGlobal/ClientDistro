import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';
import GeneralSpinner from '../components/GeneralSpinner';
import MagicInput from '../components/MagicInput';

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
          Fill the empty fields below and choose what activity you want to do. You will be placed in a search pool until we find someone that meets your requirements.
        </p>
        <p>
          Join us and meet strangers!
        </p>
        <main
          style={styles.main}
        >
          <MagicInput
            prefix='I want to:'
            search={this.props.indexActivities}
            onSelect={(v) => console.log('selected', v)}
            source={this.props.foundActivities.found}
            style={{ marginBottom: '1em' }}
          />
          <hr style={styles.line}/>
          <MagicInput
            prefix='together with somone who:'
            search={this.props.indexActivities}
            onSelect={(v) => console.log('selected', v)}
            source={this.props.foundActivities.found}
            style={{ marginBottom: '1em' }}
          />
          <hr style={styles.line}/>
          <MagicInput
            prefix='I am someone who:'
            search={this.props.indexActivities}
            onSelect={(v) => console.log('selected', v)}
            source={this.props.foundActivities.found}
            style={{ marginBottom: '1em' }}
          />
      </main>
      </div>
    );
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  line: {
    margin: '1em auto',
    border: 'none',
    borderBottom: '1px solid lightGrey',
    width: '50%',
  },
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
