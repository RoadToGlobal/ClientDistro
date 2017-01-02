const fakeInitialState = {
  isLoading: false,
  error: false,
  found: [
    { key: 'is named', type: 'word' },
    { key: 'is a fan of', type: 'word' },
    { key: 'has rank', type: 'word' },
    { key: 'can speak', type: 'wordMultiple' },
    { key: 'has kids', type: 'number' },
    { key: 'is aged', type: 'number' },
    { key: 'is around level', type: 'number' },
    { key: 'has years of experience', type: 'number' },
  ]
};

export default function foundProps(state = fakeInitialState, action) {
  switch (action.type) {
    case 'PROPS_EXAMPLE':
      // console.log(action.data);
      return [...state];
    default:
      return state;
  }
}
