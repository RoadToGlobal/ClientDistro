const fakeInitialState = {
  isLoading: false,
  error: false,
  found: [
    {
      id: '1dfdfdhhd',
      name: 'Overwatch',
      prefix: 'Play the Game',
      style: {
        accentColor: '#f00',
        backgroundColor: '#fff',
        icon: 'https://maxcdn.icons8.com/Color/PNG/512/Logos/overwatch-512.png'
      },
    },
    {
      id: '8yd9wdhd',
      name: 'Dirty dancing',
      prefix: 'Sexy dancing',
      style: {
        accentColor: '#f00',
        backgroundColor: 'red',
        icon: 'http://www.freeiconspng.com/uploads/sports-dancing-icon-8.png'
      },
    },
    {
      id: '339d0j2jj',
      name: 'Rust',
      prefix: 'Play the Game',
      style: {
        accentColor: '#f00',
        backgroundColor: 'blue',
        icon: 'http://www.rigormortis.be/wp-content/uploads/rust-icon-512.png'
      },
    }
  ]
};

export default function Activities(state = fakeInitialState, action) {
  switch (action.type) {
    case 'indexActivitiesRequest':
      return {
        isLoading: true,
        error: false,
        found: [],
      };
    case 'indexActivitiesSuccess':
      return {
        isLoading: false,
        error: false,
        found: action.activities,
      };
    case 'indexActivitiesError':
      return {
        isLoading: false,
        error: action.error,
        found: [],
      };
    default:
      return state;
  }
}
