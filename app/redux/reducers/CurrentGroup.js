import { browserHistory } from 'react-router';

const initialState = {
  isLoading: true,
  error: false,
  group: {},
};

export default function CurrentGroup(state = initialState, action) {
  switch (action.type) {
    case 'groupAbsorbedInto':
      if (state.group._id === action.absorbeeId) {
        return {
          isloading: false,
          error: false,
          group: action.absorber,
        };
      } else {
        return state;
      }
      break;
    case 'groupAbsorbed':
      if (state.group._id === action.absorber._id) {
        return {
          isLoading: false,
          error: false,
          group: action.absorber,
        };
      } else {
        return state;
      }
      break;
    case 'readGroupRequest':
      return {
        isLoading: true,
        error: false,
        group: state.group,
      };
      break;
    case 'readGroupSuccess':
      return {
        isLoading: false,
        error: false,
        group: action.payload,
      };
      break;
    case 'readGroupError':
      return {
        isLoading: false,
        error: action.error,
        group: state.group,
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
