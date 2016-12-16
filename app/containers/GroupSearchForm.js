import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';

class GroupSearchForm extends React.Component {
  static propTypes = {
    Activities: PropTypes.object,
    Props: PropTypes.array,
    Reqs: PropTypes.array,
    SearchActivities: PropTypes.func,
    SearchProps: PropTypes.func,
    SearchReqs: PropTypes.func,
  };

  render() {
    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
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
          onClick={this.props.indexActivities}
        >
          SearchActivities
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Activities: state.Activities,
    Props: state.Props,
    Reqs: state.Reqs,
  };
};

const mapDispatchToProps = {
  indexActivities: actions.activities.index,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     SearchActivities: (searchText) => (dispatch({
//       type: 'ACTIVITY_EXAMPLE',
//       data: 'activities search action triggered',
//     })),
//     SearchReqs: (searchText) => (dispatch({
//       type: 'REQS_EXAMPLE',
//       data: 'Reqs search action triggered',
//     })),
//     SearchProps: (searchText) => (dispatch({
//       type: 'PROPS_EXAMPLE',
//       data: 'Props search action triggered',
//     })),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(GroupSearchForm);
