const fakeInitialState = {
  id: '1dasdasdas',
  token: 'exampleToken',
  globalProps: {
    name: 'Frasse',
    age: 30,
    imgUrl: 'https://pbs.twimg.com/profile_images/1876758845/image.jpg',
  },
};

export default function CurrentUser(state = fakeInitialState, action) {
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
