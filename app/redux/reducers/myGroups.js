const fakeInitialState = {
  isLoading: false,
  error: false,
  groups: [],
}

export default function myGroups(state = fakeInitialState, action) {
  switch (action.type) {
    case 'groupRemoved':
      return {
        isLoading: false,
        error: false,
        groups: state.groups.filter((group) => (group._id !== action.groupId)),
      }
      break;
    case 'readMyGroupsRequest':
      return {
        isLoading: true,
        error: false,
        groups: [],
      }
      break;
    case 'readMyGroupsSuccess':
      return {
        isLoading: false,
        error: false,
        groups: action.payload,
      }
      break;
    case 'readMyGroupsError':
      return {
        isLoading: false,
        error: action.error,
        groups: [],
      }
      break;
    case 'joinActivitySuccess':
      return {
        ...state,
        groups: [
          ...state.groups,
          action.payload.group,
        ],
      }
      break;
    default:
      return state;
  }
}
