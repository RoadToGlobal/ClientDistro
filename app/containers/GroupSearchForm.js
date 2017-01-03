import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';
import GeneralSpinner from '../components/GeneralSpinner';
import GeneralButton from '../components/GeneralButton';
import MagicInput from '../components/MagicInput';
import RequirementSection from '../components/RequirementSection'
import PropSection from '../components/PropSection'

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
      warning: false,
      threshold: 0.5,
      requirements: [],
      localProps: [],
    };
  }

  componentWillMount() {
    this.props.indexActivities();
    if (this.props.CurrentUser.token) {
      this.props.readMyGroups();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.CurrentUser.token || nextProps.CurrentUser.token) {
      this.props.readMyGroups();
    }
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

        <PropSection
          availableProps={this.props.foundProps.found}
          onSelect={(props) => this.setState({localProps: props})}
        />

        <hr style={styles.line}/>

        <GeneralButton
          buttonContent={ this.state.warning ? this.props.CurrentUser.token ? 'Do the thing' : 'Log in first' : 'Do the thing!' }
          onClick={() =>{
            if (this.props.CurrentUser.token) {
              this.props.joinActivity({
                requirements: this.state.requirements,
                activity: this.props.CurrentActivity.activity,
                threshold: this.state.threshold,
                localProps: this.state.localProps,
              });
            } else {
              this.setState({warning: true})
            }
          }}
        />
      </main>
    );
  }
}

const styles = {
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
    CurrentUser: state.CurrentUser,
    foundProps: state.foundProps,
    foundReqs: state.foundReqs,
  };
};

const mapDispatchToProps = {
  indexActivities: actions.activities.index,
  readActivity: actions.activities.read,
  joinActivity: actions.activities.join,
  readMyGroups: actions.groups.readMyGroups,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupSearchForm);
