const fakeInitialState = {
  isLoading: false,
  error: false,
  found: [
    { key: 'name', type: 'word' },
    { key: 'likes', type: 'word' },
    { key: 'language', type: 'wordMultiple' },
    { key: 'aged', type: 'number' },
    { key: 'years of experience', type: 'number' },
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
