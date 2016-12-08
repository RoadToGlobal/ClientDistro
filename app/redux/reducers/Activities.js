const fakeInitialState = [
  {
    id: '1dfdfdhhd',
    name: 'Overwatch',
    prefix: 'Play the Game',
    style: {
      accentColor: '#f00',
      backgroundColor: '#fff',
    },
  },
];

export default function Activities(state = fakeInitialState, action) {
  switch (action.type) {
    case 'ACTIVITY_EXAMPLE':
      console.log(action.data);
      return [...state];
    default:
      return state;
  }
}
