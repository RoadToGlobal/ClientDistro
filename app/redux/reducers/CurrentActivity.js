const fakeInitialState = {
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
};

export default function CurrentActivity(state = fakeInitialState, action) {
  switch (action.type) {
    case 'CURRENT_ACTIVITY_EXAMPLE':
      console.log(action.data);
      return {
        ...state,
      };
    default:
      return state;
  }
}
