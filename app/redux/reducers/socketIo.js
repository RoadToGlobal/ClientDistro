const initialState = {
  isLoading: false,
  error: false,
  messages: [],
  otherUsers: [],
  rooms: new Map(),
};

export default function socketIo(state = initialState, action) {
  switch (action.type) {
    case 'server/joinRoom':
      let messages = [];

      if (state.rooms.has(action.room)) {
        messages = state.rooms.get(action.room);
      }

      return {
        ...state,
        messages,
      };
      break;
    case 'userStatus':
    case 'joinSuccess':
      return {
        ...state,
        otherUsers: [
          ...action.otherUsers,
        ],
      };
      break;
    case 'server/leaveRoom':
      state.rooms.set(action.room, state.messages);

      return {
        ...state,
        messages: [],
      };
      break;
    case 'message':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            message: action.message,
            username: action.username,
          },
        ],
      };
      break;
    case 'error':
      return {
        ...state,
        error: action.message,
      };
      break;
    case 'logoutCurrentUser':
      return {
        ...initialState,
      }
      break;
    default:
      return state;
  }
}
