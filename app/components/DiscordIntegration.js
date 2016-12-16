import React from 'react';

const discordBtn = {
  borderRadius: '2px',
  backgroundColor: '#00bef2',
  border: 'none',
  fontSize: '0.8em',
  color: '#fff',
  height: '2.8em',
};

class DiscordIntegration extends React.Component {
  render() {
    return (
      <div>
        <button style={discordBtn}>Join Discord</button>
      </div>
    );
  }
}

export default DiscordIntegration;
