import React from 'react';

const facebookBtn = {
  borderRadius: '2px',
  backgroundColor: '#00bef2',
  border: 'none',
  fontSize: '0.8em',
  color: 'white',
  height: '2.8em',
  marginRight: '1em',
};

class FacebookIntegration extends React.Component {
  render() {
    return (
      <div>
        <button style={facebookBtn}>Create Facebook Group</button>
      </div>
    );
  }
}

export default FacebookIntegration;
