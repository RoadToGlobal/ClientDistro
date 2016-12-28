const fakeInitialState = {
  isLoading: false,
  error: false,
  found: [
    {
      name: 'aged',
      type: 'number',
      action: 'equals',
      relatedProp: 'aged',
      inputValues: '',
    },
    {
      name: 'named',
      type: 'word',
      action: 'equals',
      relatedProp: 'name',
      inputValues: '',
    },
    {
      name: 'speaks',
      type: 'word',
      action: 'includes',
      relatedProp: 'language',
      inputValues: '',
    }
  ]
};

export default function foundReqs(state = fakeInitialState, action) {
  switch (action.type) {
    case 'REQS_EXAMPLE':
      // console.log(action.data);
      return [...state];
    default:
      return state;
  }
}
