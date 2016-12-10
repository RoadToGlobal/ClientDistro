const fakeInitialState = [
  {
    id: '1dfdfdhhd',
    name: 'Overwatch',
    prefix: 'Play the Game',
    customization: {
      accentColor: '#f00',
      backgroundColor: '#fff',
      icon: 'https://maxcdn.icons8.com/Color/PNG/512/Logos/overwatch-512.png'
    },
  },
  {
    id: '8yd9wdhd',
    name: 'Dirty dancing',
    prefix: 'Sexy dancing',
    customization: {
      accentColor: '#f00',
      backgroundColor: 'red',
      icon: 'http://www.freeiconspng.com/uploads/sports-dancing-icon-8.png'
    },
  },
  {
    id: '339d0j2jj',
    name: 'Rust',
    prefix: 'Play the Game',
    customization: {
      accentColor: '#f00',
      backgroundColor: 'blue',
      icon: 'http://www.rigormortis.be/wp-content/uploads/rust-icon-512.png'
    },
  }
];

export default function Activities(state = fakeInitialState, action) {
  switch (action.type) {
    case 'ACTIVITY_EXAMPLE':
      console.log(action.data);
      return [...state];
    default:
      return state;
  }
}
