import React from 'react';

import { FFFContainer } from '../DynamicStyles/common';
import FFFWindow from '../containers/FFFWindow';

const aboutBigText = {
  marginTop: '4em',
};

export default class FAQ extends React.Component {
  render() {
    return (
      <div style={FFFContainer}>
        <FFFWindow title={'About'} header={Boolean(true)} specStyle={{height: '18em'}}>
          <p>Our vision started as a school project and is now on it's way to be something a lot bigger. The idea comes from the need of grouping people up with each other even though they don't know each other, all this based on their biggest interests. In this way you will always find someone to share your interests with. We will say this again and again...</p>
          <p>Do meet strangers!</p>
          <h3 style={aboutBigText}>If you encounter any bugs you may feel free to report them to us at <a href="#">groupmakerapp@gmail.com</a>.</h3>

        </FFFWindow>
      </div>
    );
  }
}
