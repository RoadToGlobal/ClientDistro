import fetch from 'isomorphic-fetch';

// TODO: Figure out another way to catch "fetch errors".
export const index = (filter) => {
  return (dispatch, getState) => {
    dispatch(indexActivitiesRequest());
    let url = 'http://127.0.0.1:8080/activities';
    if (filter) {
      url = `http://127.0.0.1:8080/activities/?filter=${filter}`;
    }

    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // , body: JSON.stringify({}),
    })
    .then(raw => raw.json())
    .then(res => dispatch(indexActivitiesSuccess(res)))
    // .catch(res => dispatch(indexActivitiesError(res)));
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

const indexActivitiesError = (res) => {
  let error = res || true;

  return {
    type: 'indexActivitiesError',
    error,
  };
}

export const join = (groupSearch) => {
  return (dispatch, getState) => {
    dispatch(joinActivityRequest());
    let url = `http://127.0.0.1:8080/activities/${groupSearch.activity._id}/userPool`;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('Marta98:123')
      },
      body: JSON.stringify({
        localProps: groupSearch.props,
        requirements: groupSearch.requirements,
      }),
    })
    .then(raw => raw.json())
    .then(res => dispatch(joinActivitySuccess(res)))
    .catch(res => dispatch(joinActivityError(res)))
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

const joinActivityError = (res) => {
  let error = res || true;

  return {
    type: 'joinActivityError',
    error,
  };
};
