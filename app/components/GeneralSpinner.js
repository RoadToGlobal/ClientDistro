import React, { PropTypes } from 'react';
// Styling in main.scss
class GeneralSpinner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="floatingCirclesG">
        <div className="f_circleG" id="frotateG_01"></div>
        <div className="f_circleG" id="frotateG_02"></div>
        <div className="f_circleG" id="frotateG_03"></div>
        <div className="f_circleG" id="frotateG_04"></div>
        <div className="f_circleG" id="frotateG_05"></div>
        <div className="f_circleG" id="frotateG_06"></div>
        <div className="f_circleG" id="frotateG_07"></div>
        <div className="f_circleG" id="frotateG_08"></div>
      </div>
    );
  }
}

export default GeneralSpinner;
