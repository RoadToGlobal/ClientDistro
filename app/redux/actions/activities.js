import { browserHistory } from 'react-router';

import enhancedFetch from '../../helpers/enhancedFetch';

export const index = (filter) => {
  return (dispatch, getState) => {
    dispatch(indexActivitiesRequest());

    const url = filter ?
    `http://127.0.0.1:8080/activities/?filter=${filter}` :
    'http://127.0.0.1:8080/activities' ;

    return enhancedFetch(url, { method: 'GET' })
    .then(res => dispatch(indexActivitiesSuccess(res)))
    .catch(err => dispatch(indexActivitiesError(err)));
  };
};

const indexActivitiesRequest = () => {
  return {
    type: 'indexActivitiesRequest',
  };
};

const indexActivitiesSuccess = (res) => {
  return {
    type: 'indexActivitiesSuccess',
    activities: res,
  };
};

const indexActivitiesError = (err) => {
  let error = err.message || true;

  return {
    type: 'indexActivitiesError',
    error,
  };
}

export const read = (id) => {
  return (dispatch, getState) => {
    dispatch(readActivityRequest());

    const url = `http://127.0.0.1:8080/activities/${id}`;

    return enhancedFetch(url, { method: 'GET' })
    .then(res => dispatch(readActivitySuccess(res)))
    .catch(err => dispatch(readActivityError(err)));
  };
};

const readActivityRequest = () => {
  return {
    type: 'readActivityRequest',
  };
};

const readActivitySuccess = (res) => {
  return {
    type: 'readActivitySuccess',
    activity: res,
  };
};

const readActivityError = (err) => {
  let error = err.message || true;

  return {
    type: 'readActivityError',
    error,
  };
}

export const join = (groupSearch) => {
  return (dispatch, getState) => {
    dispatch(joinActivityRequest());

    if (getState().CurrentUser.token) {
      let url = `http://127.0.0.1:8080/activities/${groupSearch.activity._id}/groups`;

      return enhancedFetch( url, {
        method: 'POST',
        headers: { 'Authorization': 'Basic ' + getState().CurrentUser.token },
        body: groupSearch,
      })
      .then(res => dispatch(joinActivitySuccess(res)))
      .catch(err => dispatch(joinActivityError(err)))
    } else {
      dispatch(joinActivityError('Need to login'));
    }
  }
}

const joinActivityRequest = () => {
  return {
    type: `joinActivityRequest`,
  };
}

const joinActivitySuccess = (res) => {
  // forcefully navigate user to the new group now
  browserHistory.push('/group/' + res.group._id);
  return {
    type: 'joinActivitySuccess',
    payload: res,
  };
}

const joinActivityError = (err) => {
  let error = err.message || true;
  console.log(err);
  return {
    type: 'joinActivityError',
    error,
  };
};
