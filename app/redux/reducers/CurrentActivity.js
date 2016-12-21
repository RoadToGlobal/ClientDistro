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
    case 'joinActivityRequest':
      return {
        isLoading: true,
        error: false,
        activity: {},
      };
      break;
    case 'joinActivitySuccess':
      return {
        isLoading: false,
        error: false,
        activity: action.payload.activity,
      }
      break;
    case 'joinActivityError':
      return {
        isLoading: false,
        error: true,
        activity: {},
      }
      break;
    default:
      return state;
  }
}
