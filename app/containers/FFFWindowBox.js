import React, { PropTypes } from 'react';
// Uncomment this import when you're going to use ReactCSSTransitionGroup
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {FFFWindow} from '../DynamicStyles/common';

const contentStyle = {
  display: 'flex',
  opacity: '1',
  transition: 'opacity 0.4s',
  flexDirection: 'column',
  justifyContent: 'space-around',
};

const extendedFFFWindow = {
  ...FFFWindow,
  height: '20em',
};

const FFFWindowHeader = {
  borderBottom: '1px solid #dddddd',
};
const FFFWindowTitle = {
  margin: '0',
};
const ToggleButton = {
  cursor: 'pointer',
};

export default class FFFWindowBox extends React.Component {
  constructor() {
    super();
    this.state = {
      maximized: true,
    };
  }

  toggleVisibility() {
    this.setState({
      maximized: !this.state.maximized
    });
  }

  render() {
    return (
      <div style={this.state.maximized ? extendedFFFWindow : {...extendedFFFWindow, height: '2em'}}>
        {this.props.header ?
          <header style={FFFWindowHeader}>
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
        <div style={this.state.maximized ? contentStyle : {...contentStyle, opacity: '0'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
FFFWindowBox.propTypes = {
  header: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.object,
};
