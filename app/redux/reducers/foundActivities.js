const fakeInitialState = {
  isLoading: false,
  error: false,
  found: [],
};

export default function foundActivities(state = fakeInitialState, action) {
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
    default:
      return state;
  }
}
