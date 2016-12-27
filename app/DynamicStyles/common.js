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
  ...horizontalContainer,
  padding: '0 10vw',
  justifyContent: 'center',
  marginLeft: '5em',
  flex: '1',
  flexWrap: 'wrap',
};

export const FFFWindowStyle = {
  ...shadowCaster,
  flexBasis: '100%',
  backgroundColor: 'white',
  height: '20em',
  padding: '1em',
  color: '#333',
  marginBottom: '2em',
  display: 'flex',
  transition: 'height 0.5s',
  flexDirection: 'column',
  overflow: 'hidden',
};

export const FFFHalfWindowStyle = {
  ...FFFWindowStyle,
  flexBasis: '45%',
};
