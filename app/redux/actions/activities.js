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

export const join = (groupSearch) => {
  return (dispatch, getState) => {
    dispatch(joinActivityRequest());

    let url = `http://127.0.0.1:8080/activities/${groupSearch.activity._id}/userPool`;

    console.log(getState().CurrentUser.token);

    return enhancedFetch( url, {
      method: 'POST',
      headers: { 'Authorization': 'Basic ' + getState().CurrentUser.token },
      body: groupSearch,
    })
    .then(res => dispatch(joinActivitySuccess(res)))
    .catch(err => dispatch(joinActivityError(err)))
  };
}

const joinActivityRequest = () => {
  return {
    type: `joinActivityRequest`,
  };
}

const joinActivitySuccess = (res) => {
  return {
    type: 'joinActivitySuccess',
    payload: res,
  };
}

const joinActivityError = (err) => {
  let error = err.message || true;
  return {
    type: 'joinActivityError',
    error,
  };
};
