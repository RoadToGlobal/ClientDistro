import enhancedFetch from '../../helpers/enhancedFetch';
import apiHost from '../../helpers/apiHost';
import { readMyGroups } from './groups';

export const login = (username, password) => {
  const basicAuthString = btoa(username + ':' + password);

  return (dispatch, getState) => {
    dispatch(readTokenRequest());

    let url = `http://${apiHost}/my/token`;

    return enhancedFetch( url, {
      method: 'GET',
      headers: { 'Authorization': 'Basic ' + basicAuthString },
    })
    .then(res => dispatch(readTokenSuccess(res)))
    .then(() => dispatch(readCurrentUser()))
    .catch(res => dispatch(readTokenError(res)))
  };
};

const readTokenRequest = () => {
  return {
    type: 'readTokenRequest',
  };
};

const readTokenSuccess = (res) => {
  localStorage.setItem('token', res.token);
  return {
    type: 'readTokenSuccess',
    token: res.token,
  };
};

const readTokenError = (res) => {
  let error = res.message || true;
  return {
    type: 'readTokenError',
    error,
  };
}

export const readCurrentUser = () => {
  return (dispatch, getState) => {
    dispatch(readCurrentUserRequest());

    let url = `http://${apiHost}/my/user`;

    return enhancedFetch( url, {
      method: 'GET',
      headers: { 'Authorization': 'JWT ' + getState().CurrentUser.token },
    })
    .then(res => dispatch(readCurrentUserSuccess(res)))
    .then(() => dispatch(readMyGroups()))
    .catch(res => dispatch(readCurrentUserError(res)))
  };
};

const readCurrentUserRequest = () => {
  return {
    type: 'readCurrentUserRequest',
  };
};

// TODO: should we not return res.user?
const readCurrentUserSuccess = (res) => {
  return {
    type: 'readCurrentUserSuccess',
    user: res,
  };
};

const readCurrentUserError = (res) => {
  let error = res.message || true;
  return {
    type: 'readCurrentUserError',
    error,
  };
}

export const setToken = (token) => {
  return (dispatch, getState) => {
    return dispatch({
      type: 'setToken',
      token: token,
    });
  };
};

export const logoutCurrentUser = () => {
  localStorage.removeItem('token');

  return (dispatch, getState) => {
    return dispatch({ type: 'logoutCurrentUser' });
  };
};
