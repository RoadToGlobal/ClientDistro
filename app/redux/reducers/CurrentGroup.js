import { browserHistory } from 'react-router';

const initialState = {
  isLoading: true,
  error: false,
  group: {},
};

export default function CurrentGroup(state = initialState, action) {
  switch (action.type) {
    case 'groupAbsorbedInto':
      console.log('groupAbsorbedInto', action, state.group);
      console.log('compare', state.group._id, action.absorbeeId);
      if (state.group._id == action.absorbeeId) {
        console.log('should be fine');
        return {
          isloading: false,
          error: false,
          group: action.absorber,
        }
      } else {
        return state
      }
      break;
    case 'groupAbsorbed':
      console.log('groupAbsorbed', action, state.group);
      console.log('compare', state.group._id, action.absorber._id);
      if (state.group._id == action.absorber._id) {
        console.log('should be fine');
        return {
          isLoading: false,
          error: false,
          group: action.absorber,
        }
      } else {
        return state
      }
      break;
    case 'readGroupRequest':
      return {
        isLoading: true,
        error: false,
        group: state.group,
      }
      break;
    case 'readGroupSuccess':
      return {
        isLoading: false,
        error: false,
        group: action.payload,
      }
      break;
    case 'readGroupError':
      return {
        isLoading: false,
        error: action.error,
        group: state.group,
      }
      break;
    case 'logoutCurrentUser':
      return {
        ...initialState,
      }
      break;
    default:
      return state;
  }
}
