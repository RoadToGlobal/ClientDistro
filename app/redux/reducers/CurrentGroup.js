const fakeInitialState = {
  id: '1dasdgagagaga',
  ParentActivity: '1dgsjgdffgsk',
  members: [
    {
      id: '1dasdadasd',
      globalProps: {
        name: 'Mr Miagi',
        age: 60,
        imgUrl: 'https://pbs.twimg.com/profile_images/490956008404295680/cULvSQJl.jpeg',
      },
      localProps: {
        experience: 54,
        rank: 30,
        SR: 2400,
      },
    },
  ],
  chatRoom: [
    {
      date: 1234000,
      data: 'Tja Stork, flyger du?',
      sender: 'Toby',
    },
    {
      date: 1234004,
      data: 'Nja, det',
      sender: 'Toby',
    },
  ],
};

export default function CurrentGroup(state = fakeInitialState, action) {
  switch (action.type) {
    case 'CURRENT_GROUP_EXAMPLE':
      console.log(action.data);
      return {
        ...state,
      };
    default:
      return state;
  }
}
