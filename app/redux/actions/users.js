import enhancedFetch from '../../helpers/enhancedFetch';
import { readMyGroups } from './groups';

export const readCurrentUser = (token) => {
  // TODO: Reimplement with "real token".

  return (dispatch, getState) => {
    dispatch(readCurrentUserRequest());

    let url = 'http://127.0.0.1:8080/my/user';

    return enhancedFetch( url, {
      method: 'GET',
      headers: { 'Authorization': 'Basic ' + token }
    })
    .then(res => dispatch(readCurrentUserSuccess(res, token)))
    .then(() => dispatch(readMyGroups()))
    .catch(res => dispatch(readCurrentUserError(res)))
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
  let error = res.message || true;
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
