const fakeInitialState = {
  isLoading: true,
  error: false,
  group: {},
};

export default function CurrentGroup(state = fakeInitialState, action) {
  switch (action.type) {
    case 'readGroupRequest':
      return {
        isLoading: true,
        error: false,
        group: state.group,
      }
      break;
    case 'readGroupSuccess':
      return {
        isLoading: false,
        error: false,
        group: action.payload,
      }
      break;
    case 'readGroupError':
      return {
        isLoading: false,
        error: action.error,
        group: state.group,
      }
      break;
    default:
      return state;
  }
}
