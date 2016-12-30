import React, { PropTypes } from 'react';
// Uncomment this import when you're going to use ReactCSSTransitionGroup
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {FFFWindowStyle} from '../DynamicStyles/common';

const contentStyle = {
  flex: 1,
  display: 'flex',
  opacity: '1',
  flexDirection: 'column',
  justifyContent: 'space-around',
};

const FFFWindowTitle = {
  margin: '0',
  fontFamily: 'Nunito',
};
const ToggleButton = {
  cursor: 'pointer',
};

export default class FFFWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      maximized: true,
      showContent: '',
    };
  }

  toggleVisibility() {
    this.setState({
      maximized: !this.state.maximized
    });
    if(this.state.maximized) {
      this.setState({
        showContent: {
          visibility: 'hidden',
          opacity: 0,
          transition: 'visibility 0.2s, opacity 0.2s linear',
        }
      });
    } else {
      this.setState({
        showContent: {
          visibility: 'visible',
          opacity: 1,
          transition: 'opacity 0.5s linear',
        }
      });
    }
  }

  render() {
    return (
      <div style={this.state.maximized ? {...FFFWindowStyle, ...this.props.specStyle} : {...FFFWindowStyle, height: '2em', transitionDelay: '0.2s'}}>
        {this.props.header ?
          <header>
            <h1 style={FFFWindowTitle}>
              {this.props.title}
              <a
                style={ToggleButton}
                onClick={() => this.toggleVisibility()}>
                {this.state.maximized ? ' -' : ' +'}
              </a>
            </h1>
          </header>
        : null }
        <div style={
          this.state.maximized ?
          {...contentStyle, ...this.state.showContent}
          :
          {...contentStyle, ...this.state.showContent, opacity: '0'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

FFFWindow.propTypes = {
  header: PropTypes.bool,
  title: PropTypes.string,
  specStyle: PropTypes.object,
  children: PropTypes.object,
};
