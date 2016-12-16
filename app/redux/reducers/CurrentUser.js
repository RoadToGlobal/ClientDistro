const fakeInitialState = {
  error: false,
  isLoading: false,
  id: '1dasdasdas',
  token: 'exampleToken',
  globalProps: {
    name: 'Frasse',
    age: 30,
    imgUrl: 'https://pbs.twimg.com/profile_images/1876758845/image.jpg',
  },
  groupSearches: [{
    group: 'blir ett id snart',
    requirements: 'not implemented yet',
    localProps: 'not implemented yet',
    notificationSettings: 'not implemented yet',
    activity: {
      id: "58540504d0b4550100e61c88",
      name: "Overwatch",
      prefix: "Play the Game",
      style: {
        "accentColor": "#6f2771",
        "backgroundColor": "#797f2e",
        "fontColor": "#5a280b"
      }
    }
  }]
};

export default function CurrentUser(state = fakeInitialState, action) {
  switch (action.type) {
    case 'CURRENT_USER_EXAMPLE':
      // console.log(action.data);
      return {
        ...state,
      };
    default:
      return state;
  }
}
