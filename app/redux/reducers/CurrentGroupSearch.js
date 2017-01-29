// Isn't this replaced by CurrentGroup?

const initialState = {
  Group: false,
  Activity: false,
  Requirements: [{
      inteDefinieradAn: 'inteDefinieradAn',
    },
  ],
  localProps: {
    experience: 56,
    rank: 32,
    SR: 2406,
  },
  NotificationSettings: {
    newMessage: 'beep',
    newMember: 'beep',
    GroupFilled: 'email',
  },
};

export default function CurrentGroupSearch(state = initialState, action) {
  switch (action.type) {
    case 'CURRENT_GROUP_SEARCH_EXAMPLE':
      return {
        ...state,
      };
    case 'logoutCurrentUser':
      return {
        ...initialState,
      }
      break;
    default:
      return state;
  }
}
