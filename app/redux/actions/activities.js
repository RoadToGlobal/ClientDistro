import fetch from 'isomorphic-fetch';

export const index = (filter) => {
  return (dispatch, getState) => {
    dispatch(indexActivitiesRequest());
    let url = 'http://127.0.0.1:8080/activities';
    if (filter) {
      url = 'http://127.0.0.1:8080/activities/?filter=${filter}';
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
    .catch(res => dispatch(indexActivitiesError(res)));
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
    type: 'indexActivitiesSuccess',
    error,
  };
};
