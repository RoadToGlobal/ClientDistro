import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';

import GeneralSpinner from '../components/GeneralSpinner';
import GeneralButton from '../components/GeneralButton';
import MagicInput from '../components/MagicInput';
import RequirementSection from '../components/RequirementSection'

class GroupSearchForm extends React.Component {
  static propTypes = {
    foundActivities: PropTypes.object,
    foundProps: PropTypes.array,
    foundReqs: PropTypes.array,
    SearchActivities: PropTypes.func,
    SearchProps: PropTypes.func,
    SearchReqs: PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      threshold: 0.5,
      requirements: [],
      localProps: [],
    };
  }

  componentWillMount() {
    this.props.indexActivities()
  }

  render() {
    return (
      <main
        style={styles.main}
      >
        <MagicInput
          prefix='I want to:'
          search={this.props.indexActivities}
          onSelect={(a) => this.props.readActivity(a._id)}
          source={this.props.foundActivities.found}
          style={{ marginBottom: '1em' }}
        />

        <hr style={styles.line}/>

        <RequirementSection
          reqs={this.props.foundReqs.found}
          onSelect={(reqs) => this.setState({requirements: reqs})}
        />

        <hr style={styles.line}/>

        <MagicInput
          prefix='I am someone who:'
          onSelect={(v) => console.log('selected', v)}
          source={this.props.foundProps.found}
          style={{ marginBottom: '1em' }}
        />

        <GeneralButton
          buttonContent='Do the thing!'
          onClick={() => this.props.joinActivity({
            requirements: this.state.requirements,
            activity: this.props.CurrentActivity.activity,
            localProps: [
              { key: 'name', value: 'rickisen'},
              { key: 'likes', value: 'pizza'},
              { key: 'age', value: '30'},
            ],
          })}
        />
      </main>
    );
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '2em',
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
    CurrentActivity: state.CurrentActivity,
    foundProps: state.foundProps,
    foundReqs: state.foundReqs,
  };
};

const mapDispatchToProps = {
  indexActivities: actions.activities.index,
  readActivity: actions.activities.read,
  joinActivity: actions.activities.join,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupSearchForm);
