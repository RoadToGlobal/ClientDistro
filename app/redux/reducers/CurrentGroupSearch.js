const fakeInitialState = {
  Group: '1dasdasjdksdj',
  Activity: '1dasdasjkdahsd',
  Requirements: [
    {
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

export default function CurrentGroupSearch(state = fakeInitialState, action) {
  switch (action.type) {
    case 'CURRENT_GROUP_SEARCH_EXAMPLE':
      console.log(action.data);
      return {
        ...state,
      };
    default:
      return state;
  }
}
