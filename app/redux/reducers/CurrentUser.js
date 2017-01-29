const initialState = {
  isLoading: false,
  error: false,
  user: false,
  token: false,
};

export default function CurrentUser(state = initialState, action) {
  switch (action.type) {
    case 'readCurrentUserRequest':
      return {
        ...state,
        isLoading: true,
      };
      break;
    case 'readTokenRequest':
      return {
        ...state,
        isLoading: true
      };
      break;
    case 'setToken':
      return {
        ...state,
        token: action.token,
      };
      break;
    case 'readTokenSuccess':
      return {
        ...state,
        token: action.token,
      };
      break;
    case 'readTokenError':
      return {
        ...state,
        error: action.error,
      };
      break;
    case 'readCurrentUserSuccess':
      return {
        ...state,
        isLoading: false,
        user: action.user,
      };
      break;
    case 'readCurrentUserError':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
      break;
    case 'logoutCurrentUser':
      return {
        isLoading: false,
        error: false,
        user: false,
        token: false,
      };
      break;
    case 'logoutCurrentUser':
      return {
        ...initialState,
      };
      break;
    default:
      return state;
  }
}
