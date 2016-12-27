import fetch from 'isomorphic-fetch';

// TODO: Figure out another way to catch "fetch errors".
export const readCurrentUser = (token) => {
  // TODO: Reimplement with "real token".

  return (dispatch, getState) => {
    dispatch(readCurrentUserRequest());
    let url = 'http://127.0.0.1:8080/my/user';
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token,
      }
    })
    .then(raw => raw.json())
    .then(res => dispatch(readCurrentUserSuccess(res, token)));
    // .catch(res => dispatch(readCurrentUserError(res)));
  };
};

const readCurrentUserRequest = () => {
  return {
    type: 'readCurrentUserRequest',
  };
};

const readCurrentUserSuccess = (res, token) => {
  localStorage.setItem('token', token);

  return {
    type: 'readCurrentUserSuccess',
    user: res,
    token: token,
  };
};

const readCurrentUserError = (res) => {
  let error = res || true;
  return {
    type: 'readCurrentUserError',
    error,
  };
}

export const logoutCurrentUser = () => {
  localStorage.removeItem('token');

  return (dispatch, getState) => {
    return dispatch({ type: 'logoutCurrentUser' });
  };
};