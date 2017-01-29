const initialState = {
  isLoading: false,
  error: false,
  found: [],
};

export default function foundActivities(state = initialState, action) {
  switch (action.type) {
    case 'indexActivitiesRequest':
      return {
        isLoading: true,
        error: false,
        found: [],
      };
    case 'indexActivitiesSuccess':
      return {
        isLoading: false,
        error: false,
        found: action.activities,
      };
    case 'indexActivitiesError':
      return {
        isLoading: false,
        error: action.error,
        found: [],
      };
    case 'logoutCurrentUser':
      return {
        ...initialState,
      }
      break;
    default:
      return state;
  }
}
