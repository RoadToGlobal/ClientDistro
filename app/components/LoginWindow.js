import React, { PropTypes } from 'react';
import GeneralButton from '../components/GeneralButton';

const windowContainer = {
  flex: 1,

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  margin: 'auto',
  backgroundColor: '#fff',
  minHeight: 0,
};
const windowItem = {
  flex: 1,
  padding: '0.5em',
};

class LoginWindow extends React.Component {
  static propTypes = {
    showGroupAppLogin: PropTypes.bool,
    showGoogleLogin: PropTypes.bool,
    showFacebookLogin: PropTypes.bool,
    userLoginInput: PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <div>
        {this.props.showGroupAppLogin ?
          <div style={windowContainer}>
            <div style={windowItem}>
              <label>Username:</label>
              <input onChange={(event) => this.setState({username: event.currentTarget.value})} type="text"/>
            </div>
            <div style={windowItem}>
              <label>Password:</label>
              <input onChange={(event) => this.setState({password: event.currentTarget.value})} type="text"/>
            </div>
            <GeneralButton
              buttonStyle={windowItem}
              buttonContent={'Submit'}
              onClick={ () => this.props.userLoginInput(this.state.username, this.state.password) }
            />
          </div>
          : null}

        {this.props.showGoogleLogin ?
          <div>
            <span>Implementera Google+ login.</span>
          </div>
          : null}

        {this.props.showFacebookLogin ?
          <div>
            <span>Implementera Facebook login.</span>
          </div>
          : null}
      </div>
    );
  }
}

export default LoginWindow;
