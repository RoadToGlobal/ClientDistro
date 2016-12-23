import fetch from 'isomorphic-fetch';

// TODO: Figure out another way to catch "fetch errors".
export const readCurrentUser = (user, password) => {
  return (dispatch, getState) => {
    dispatch(readCurrentUserRequest());
    let url = 'http://127.0.0.1:8080/my/user';
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(user + ':' + password)
      }
    })
    .then(raw => raw.json())
    .then(res => dispatch(readCurrentUserSuccess(res)));
    // .catch(res => dispatch(readCurrentUserError(res)));
  };
};

const readCurrentUserRequest = () => {
  return {
    type: 'readCurrentUserRequest',
  };
};

const readCurrentUserSuccess = (res) => {
  return {
    type: 'readCurrentUserSuccess',
    user: res,
  };
};

const readCurrentUserError = (res) => {
  let error = res || true;
  return {
    type: 'readCurrentUserError',
    error,
  };
}