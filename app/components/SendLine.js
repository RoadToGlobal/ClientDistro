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

  handleKeypress(event) {
    if (event.key === 'Enter' && this.state.message !== '') {
      this.props.postMessage(this.state.message);
      this.setState({message: ''});
    }
  }

  render() {
    return (
      <div style={sendLineContainer}>
        <div style={{flex: 6}}>
          <input
            style={{ ...generalInput, ...chatItems, }}
            inputPlaceholder=" text here plz.."
            value={this.state.message}
            onChange={(e) => this.setState({message: e.currentTarget.value})}
            onKeyPress={(e) => this.handleKeypress(e)}
          />
        </div>
        <div style={{flex: 1}}>
          <GeneralButton
            buttonStyle={chatItems}
            buttonContent={'Send'}
            onClick={() => {
              if (this.state.message !== ''){
                this.props.postMessage(this.state.message);
                this.setState({message: ''});
              }
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

const generalInput = {
  fontFamily: 'Nunito',
  padding: 0,
  border: '1px solid rgba(60, 73, 89, 0.3)',
  boxSizing: 'border-box',
};


export default SendLine;
