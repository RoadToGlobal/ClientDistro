const fakeInitialState = {
  isLoading: false,
  error: false,
  activity: {
    id: '1dfdfdhhd',
    name: 'Overwatch',
    prefix: 'Play the Game',
    userPool: 100,
    groups: 10,
    style: {
      fontColor: '#000',
      windowColor: '#aaa',
      accentColor: '#f00',
      backgroundColor: '#fff',
    },
  },
};

export default function CurrentActivity(state = fakeInitialState, action) {
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
    default:
      return state;
  }
}
