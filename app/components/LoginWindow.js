import React, { PropTypes } from 'react';
import GeneralButton from '../components/GeneralButton';
import GeneralInput from '../components/GeneralInput';

const windowContainer = {
  flex: 1,

  display: 'flex',
  flexDirection: 'column',

  marginTop: '10px',
};
const windowItemContainer = {
  flex: 1,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginBottom: '10px',
};
const windowItem = {
  height: '50px',
  width: '40%',
  minWidth: '150px',
  fontSize: '1.4em',
  textAlign: 'center',
};
const loginButton = {
  backgroundColor: '#28b50e',
  height: '56px',
  fontSize: '1.4em',
  width: '40%',
  minWidth: '150px',
  padding: 0,
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
    };
  }

  render() {
    return (
      <div>
        {this.props.showGroupAppLogin ?
          <div style={windowContainer}>
            <div style={windowItemContainer}>
              <GeneralInput
                inputType={'text'}
                inputPlaceholder={'Username'}
                inputStyle={windowItem}
                onChange={(event) => this.setState({username: event.currentTarget.value})}
                onEnter={() =>{
                  this.props.userLoginInput(this.state.username, this.state.password);
                }}
              />
            </div>
            <div style={windowItemContainer}>
              <GeneralInput
                inputType={'password'}
                inputPlaceholder={'Password'}
                inputStyle={windowItem}
                onChange={(event) => this.setState({password: event.currentTarget.value})}
                onEnter={(e) =>{
                  this.props.userLoginInput(this.state.username, this.state.password);
                }}
              />
            </div>
            <div style={windowItemContainer}>
              <GeneralButton
                buttonStyle={loginButton}
                buttonContent={'Sign in'}
                onEnter={(e) =>{
                  this.props.userLoginInput(this.state.username, this.state.password);
                }}
                onClick={(e) =>{
                  this.props.userLoginInput(this.state.username, this.state.password);
                }}
              />
            </div>
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
