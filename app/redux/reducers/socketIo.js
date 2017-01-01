const fakeInitialState = {
  isLoading: false,
  error: false,
  messages: [],
  rooms: new Map(),
};

export default function socketIo(state = fakeInitialState, action) {
  switch (action.type) {
    case 'server/joinRoom':
      let messages = [];

      if (state.rooms.has(action.data)) {
        messages = state.rooms.get(action.data);
      }

      return {
        ...state,
        messages,
      };
      break;
    case 'server/leaveRoom':
      state.rooms.set(action.data, state.messages);

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
          action.data,
        ],
      };
      break;
    default:
      return state;
  }
}
