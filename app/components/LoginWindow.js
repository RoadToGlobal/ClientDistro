import React, { PropTypes } from 'react';

import apiHost from '../helpers/apiHost'
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

const googlePlusButton = {
  display: 'inline-block',
  width: '40%',
  minWidth: '150px',
  cursor: 'pointer',

  fontFamily: 'Nunito',
  fontSize: '1.4em',
  fontWeight: 700,
  textAlign: 'center',
  textDecoration: 'none',
  padding: '0.6em',

  backgroundColor: '#dd4b39',
  color: '#fff',
};

const facebookButton = {
  ...googlePlusButton,
  backgroundColor: '#3b5998',
  color: '#fff',
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
          <div style={windowContainer}>
            <div style={windowItemContainer}>
              <a
                href={`http://${apiHost}/groupapp/auth/google`}
                style={googlePlusButton}
              >
                Sign in with Google
              </a>
            </div>
          </div>
          : null}

        {this.props.showFacebookLogin ?
          <div style={windowContainer}>
            <div style={windowItemContainer}>
              {/* <a */}
              {/*   href={`http://${apiHost}/groupapp/auth/facebook`} */}
              {/*   style={facebookButton} */}
              {/* > */}
              {/*   Sign in with facebook */}
              {/* </a> */}
            </div>
          </div>
          : null}
      </div>
    );
  }
}

export default LoginWindow;
