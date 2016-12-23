import React, { PropTypes } from 'react';
// Uncomment this import when you're going to use ReactCSSTransitionGroup
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {FFFWindowStyle} from '../DynamicStyles/common';

// TODO: This const is connected with the todo below.
// const contentStyle = {
//   display: 'flex',
//   opacity: '1',
//   transition: 'opacity 0.4s',
//   flexDirection: 'column',
//   justifyContent: 'space-around',
// };

const FFFWindowHeader = {
  borderBottom: '1px solid #dddddd',
};
const FFFWindowTitle = {
  margin: '0',
};
const ToggleButton = {
  cursor: 'pointer',
};

export default class FFFWindow extends React.Component {
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
      <div style={this.state.maximized ? {...FFFWindowStyle, ...this.props.specStyle} : {...FFFWindowStyle, height: '2em'}}>
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
        {/* TODO: Make the animation work with the previous style object as shown below.
          <div style={this.state.maximized ? contentStyle : {...contentStyle, opacity: '0'}}>
        */}
        <div>
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
