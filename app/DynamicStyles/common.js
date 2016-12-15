export const container = {
  color: '#333',
  fontFamily: 'PT Sans',
};

export const shadowCaster = {
  boxShadow: '0px 5px 30px rgba(0,0,0,0.4)',
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

export const FFFWindowStyle = {
  ...shadowCaster,
  backgroundColor: 'white',
  height: '20em',
  padding: '1em',
  width: '40em',
  color: '#333',
  marginBottom: '2em',
  display: 'flex',
  transition: 'height 0.5s',
  flexDirection: 'column',
  overflow: 'hidden',
};
