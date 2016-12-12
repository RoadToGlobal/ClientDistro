export const container = {
  backgroundColor: 'lightGrey',
  color: '#333',
};

export const verticalContainer = {
  ...container,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

export const horizontalContainer = {
  ...container,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
};

export const FFFContainer = {
  ...verticalContainer,
  alignItems: 'center',
  marginRight: 'auto',
  marginLeft: 'auto',
};

export const FFFWindow = {
  backgroundColor: 'white',
  margin: '0.5em',
  padding: '1em',
  width: '40em',
  minHeight: '20em',
  color: '#333',
};
