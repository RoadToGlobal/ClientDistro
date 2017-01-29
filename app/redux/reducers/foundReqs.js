// TODO: connect to api endpoint when ready
const initialState = {
  isLoading: false,
  error: false,
  found: [
    {
      name: 'is named',
      type: 'word',
      action: 'equals',
      relatedProp: 'is named',
      inputValues: [''],
    },
    {
      name: 'is a fan of',
      type: 'word',
      action: 'equals',
      relatedProp: 'is a fan of',
      inputValues: [''],
    },
    {
      name: 'has rank',
      type: 'word',
      action: 'equals',
      relatedProp: 'has rank',
      inputValues: [''],
    },
    {
      name: 'can speak',
      type: 'word',
      action: 'includes',
      relatedProp: 'can speak',
      inputValues: [''],
    },
    {
      name: 'has kids',
      type: 'number',
      action: 'equals',
      relatedProp: 'has kids',
      inputValues: [''],
    },
    {
      name: 'is aged',
      type: 'number',
      action: 'equals',
      relatedProp: 'is aged',
      inputValues: [''],
    },
    {
      name: 'is around level',
      type: 'number',
      action: 'equals',
      relatedProp: 'is around level',
      inputValues: [''],
    },
    {
      name: 'has years of experience',
      type: 'number',
      action: 'equals',
      relatedProp: 'has years of experience',
      inputValues: [''],
    },
  ]
};

export default function foundReqs(state = initialState, action) {
  switch (action.type) {
    case 'REQS_EXAMPLE':
      // console.log(action.data);
      return [...state];
    case 'logoutCurrentUser':
      return {
        ...initialState,
      };
      break;
    default:
      return state;
  }
}
