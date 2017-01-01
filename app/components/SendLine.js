import React, { PropTypes } from 'react';

import GeneralInput from '../components/GeneralInput';
import GeneralButton from '../components/GeneralButton';

class SendLine extends React.Component {
  static propTypes = {
    postMessage: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
  }

  render() {
    return (
      <div style={sendLineContainer}>
        <div style={{flex: 6}}>
          <GeneralInput
            inputStyle={chatItems}
            inputPlaceholder=" text here plz.."
            onChange={(e) => this.setState({message: e.currentTarget.value})}
            onEnter={(e) => this.props.postMessage(this.state.message)}
          />
        </div>
        <div style={{flex: 1}}>
          <GeneralButton
            buttonStyle={chatItems}
            buttonContent={'Send'}
            onClick={() => {
              this.props.postMessage(this.state.message);
            }}
          />
        </div>
      </div>
    );
  }
}

const sendLineContainer = {
  display: 'flex',
  height: '2em',
};

const chatItems = {
  height: '100%',
  width: '100%',
};

export default SendLine;
