const fakeInitialState = [
  {
    id: '1duadasdfdfd',
    text: 'aged above',
    type: 'number',
  },
  {
    id: '1duadasdfd',
    text: 'Name does not contain',
    type: 'string',
  },
  {
    id: '1duadasdfd',
    text: 'Has played for',
    type: 'time',
  },
];

export default function foundReqs(state = fakeInitialState, action) {
  switch (action.type) {
    case 'REQS_EXAMPLE':
      // console.log(action.data);
      return [...state];
    default:
      return state;
  }
}
