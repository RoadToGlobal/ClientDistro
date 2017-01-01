export const joinRoom = (room) => {
  return (dispatch, getState) => {
    return dispatch({
      type: 'server/join',
      data: room,
    });
  };
};

export const leaveRoom = () => {
  return (dispatch, getState) => {
    return dispatch({
      type: 'server/leave',
      data: '',
    });
  };
};

export const postMessage = (message) => {
  return (dispatch, getState) => {
    return dispatch({
      type: 'server/message',
      data: message,
    });
  };
};
