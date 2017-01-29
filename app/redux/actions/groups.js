import enhancedFetch from '../../helpers/enhancedFetch';
import apiHost from '../../helpers/apiHost';

export const readMyGroups = () => {
  return (dispatch, getState) => {
    dispatch(readMyGroupsRequest());

    const url = `http://${apiHost}/my/groups`;

    return enhancedFetch( url, {
      method: 'GET',
      headers: { 'Authorization': 'JWT ' + getState().CurrentUser.token },
    })
    .then(res => dispatch(readMyGroupsSuccess(res)))
    .catch(res => dispatch(readMyGroupsError(res)));
  };
};

const readMyGroupsRequest = () => {
  return {
    type: 'readMyGroupsRequest',
  };
};

const readMyGroupsSuccess = (res) => {
  return {
    type: 'readMyGroupsSuccess',
    payload: res,
  };
};

const readMyGroupsError = (res) => {
  const error = res.message || true;

  return {
    type: 'readMyGroupsError',
    error,
  };
};

export const readGroup = (id) => {
  return (dispatch, getState) => {
    dispatch(readGroupRequest());

    const url = `http://${apiHost}/groups/` + id;

    return enhancedFetch( url, {
      method: 'GET',
      headers: { 'Authorization': 'JWT ' + getState().CurrentUser.token },
    })
    .then(res => dispatch(readGroupSuccess(res)))
    .catch(res => dispatch(readGroupError(res)));
  };
};

const readGroupRequest = () => {
  return {
    type: 'readGroupRequest',
  };
};

const readGroupSuccess = (res) => {
  return {
    type: 'readGroupSuccess',
    payload: res,
  };
};

const readGroupError = (res) => {
  const error = res.message || true;

  return {
    type: 'readGroupError',
    error,
  };
};
