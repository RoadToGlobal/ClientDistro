const initialState = {
  isLoading: false,
  error: false,
  activity: false,
};

export default function CurrentActivity(state = initialState, action) {
  switch (action.type) {
    case 'readActivityRequest':
      return {
        isLoading: true,
        error: false,
        activity: state.activity,
      };
      break;
    case 'readActivitySuccess':
      return {
        isLoading: false,
        error: false,
        activity: action.activity,
      }
      break;
    case 'readActivityError':
      return {
        isLoading: false,
        error: true,
        activity: {},
      }
      break;
    case 'joinActivityRequest':
      return {
        isLoading: true,
        error: false,
        activity: state.activity,
      };
      break;
    case 'joinActivitySuccess':
      let newActivity = state.activity
      if (newActivity.groups) {
        newActivity.groups.push(action.payload.group);
      } else {
        newActivity.groups = [ action.payload.group ];
      }

      return {
        isLoading: false,
        error: false,
        activitiy: newActivity,
      }
      break;
    case 'joinActivityError':
      return {
        isLoading: false,
        error: true,
        activity: state.activity,
      }
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
