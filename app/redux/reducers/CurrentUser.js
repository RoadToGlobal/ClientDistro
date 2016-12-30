
const fakeInitialState = {
  isLoading: false,
  error: false,
  user: false,
  token: false,
}

export default function CurrentUser(state = fakeInitialState, action) {
  switch (action.type) {
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
