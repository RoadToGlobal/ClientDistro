import { browserHistory } from 'react-router';

const fakeInitialState = {
  isLoading: true,
  error: false,
  group: {},
};

export default function CurrentGroup(state = fakeInitialState, action) {
  switch (action.type) {
    case 'groupRemoved':
      if (state.group.id === action.groupId) {
        browserHistory.push('/');
        return {
          isLoading: false,
          error: false,
          group: {},
        }
      } else {
        return {
          ...state,
        }
      }
      break;
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
