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
    case 'EXAMPLE':
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
