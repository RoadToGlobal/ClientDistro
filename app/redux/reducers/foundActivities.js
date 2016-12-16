const fakeInitialState = {
  isLoading: false,
  error: false,
  results: [],
};

export default function foundActivities(state = fakeInitialState, action) {
  switch (action.type) {
    case 'indexActivitiesRequest':
      return {
        isLoading: true,
        error: false,
        results: [],
      };
    case 'indexActivitiesSuccess':
      return {
        isLoading: false,
        error: false,
        results: action.activities,
      };
    case 'indexActivitiesError':
      return {
        isLoading: false,
        error: action.error,
        results: [],
      };
    default:
      return state;
  }
}
