export const container = {
  backgroundColor: '#9ae3d8',
  color: '#333',
  fontFamily: 'PT Sans',
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
  padding: '1em',
  width: '40em',
  color: '#333',
  marginBottom: '2em',
  boxShadow: '1px 1px 10px #888888',
  // minHeight should be added
};
