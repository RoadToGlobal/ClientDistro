export const joinRoom = (room) => {
  return (dispatch, getState) => {
    return dispatch({
      type: 'server/join',
      room,
      username: getState().CurrentUser.user.username,
    });
  };
};

export const leaveRoom = (room) => {
  return (dispatch, getState) => {
    return dispatch({
      type: 'server/leave',
      room: room,
    });
  };
};

export const postMessage = (message) => {
  return (dispatch, getState) => {
    return dispatch({
      type: 'server/message',
      message,
    });
  };
};
