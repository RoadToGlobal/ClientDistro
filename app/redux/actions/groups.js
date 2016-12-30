import enhancedFetch from '../../helpers/enhancedFetch';

export const readMyGroups = () => {
  return (dispatch, getState) => {
    dispatch(readMyGroupsRequest());

    let url = 'http://127.0.0.1:8080/my/groups';

    return enhancedFetch( url, {
      method: 'GET',
      headers: { 'Authorization': 'Basic ' + getState().CurrentUser.token }
    })
    .then(res => dispatch(readMyGroupsSuccess(res)))
    .catch(res => dispatch(readMyGroupsError(res)))
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
  let error = res.message || true;

  return {
    type: 'readMyGroupsError',
    error,
  };
}

export const readGroup = (id) => {
  console.log(id);
  return (dispatch, getState) => {
    dispatch(readGroupRequest());

    let url = 'http://127.0.0.1:8080/groups/' + id;

    return enhancedFetch( url, {
      method: 'GET',
      headers: { 'Authorization': 'Basic ' + getState().CurrentUser.token }
    })
    .then(res => dispatch(readGroupSuccess(res)))
    .catch(res => dispatch(readGroupError(res)))
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
  let error = res.message || true;

  return {
    type: 'readGroupError',
    error,
  };
}
