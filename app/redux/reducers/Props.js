const fakeInitialState = [
  {
    id: '1duadasdfdfd',
    name: 'name',
    type: 'string',
  },
  {
    id: '1dfdfd',
    name: 'aged',
    type: 'number',
  },
  {
    id: '1dfdfdhhd',
    name: 'experience',
    type: 'number',
  },
];

export default function props(state = fakeInitialState, action) {
  switch (action.type) {
    case 'EXAMPLE':
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}

