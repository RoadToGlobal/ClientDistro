export class container {
  backgroundColor = 'lightGrey';
  color = '#333';
}

export class verticalContainer extends container {
  display = 'flex';
  flexDirection = 'column';
  justifyContent = 'flex-start';
}

export class horizontalContainer extends container {
  display = 'flex';
  flexDirection = 'row';
  justifyContent = 'flex-start';
}

export class FFFContainer extends verticalContainer {
  alignItems = 'center';
  marginRight = 'auto';
  marginLeft = 'auto';
}

<<<<<<< Updated upstream
export class FFFWindow {
  backgroundColor = 'white';
  margin = '0.5em';
  padding = '1em';
  width = '40em';
  minHeight = '20em';
  color = '#333';
}
=======
export const FFFWindow = {
  backgroundColor: 'white',
  margin: 0.5,
  padding: '1em',
  width: '40em',
  color: '#333',
  // minHeight should be added
};
>>>>>>> Stashed changes
