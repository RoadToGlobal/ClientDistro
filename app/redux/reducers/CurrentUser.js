// const fakeInitialState = {
//   error: false,
//   isLoading: false,
//   id: '1dasdasdas',
//   token: 'exampleToken',
//   globalProps: {
//     name: 'Frasse',
//     age: 30,
//     imgUrl: 'https://pbs.twimg.com/profile_images/1876758845/image.jpg',
//   },
//   groupSearches: [{
//     group: 'blir ett id snart',
//     requirements: 'not implemented yet',
//     localProps: 'not implemented yet',
//     notificationSettings: 'not implemented yet',
//     activity: {
//       id: "58540504d0b4550100e61c88",
//       name: "Overwatch",
//       prefix: "Play the Game",
//       style: {
//         "accentColor": "#6f2771",
//         "backgroundColor": "#797f2e",
//         "fontColor": "#5a280b"
//       }
//     }
//   }]
// };

const fakeInitialState = {
  isLoading: false,
  error: false,
  user: false,
  token: false,
}

export default function CurrentUser(state = fakeInitialState, action) {
  switch (action.type) {
    case 'joinActivitySuccess':
      state.user.groupSearches = action.payload.userPatch.groupSearches;
      return state;
      break;
    case 'readCurrentUserRequest':
      return {
        isLoading: true,
        error: false,
        user: false,
        token: false,
      }
      break;
    case 'readCurrentUserSuccess':
      return {
        isLoading: false,
        error: false,
        user: action.user,
        token: action.token,
      }
      break;
    case 'readCurrentUserError':
      return {
        isLoading: false,
        error: action.error,
        user: false,
        token: false,
      }
      break;
    case 'logoutCurrentUser':
      return {
        isLoading: false,
        error: false,
        user: false,
        token: false,
      }
      break;
    default:
      return state;
  }
}
