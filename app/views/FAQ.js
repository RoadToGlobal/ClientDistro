import React from 'react';

import { FFFContainer } from '../DynamicStyles/common';
import FFFWindow from '../containers/FFFWindow';

const faqParagraph = {
  marginBottom: '2em',
};

export default class FAQ extends React.Component {
  render() {
    return (
      <div style={FFFContainer}>
        <FFFWindow title={'FAQ'} header={Boolean(true)} specStyle={{height: '44em'}}>
          <h3>How do I create a new activity?</h3>
          <p style={faqParagraph}>There are two ways to create a new activity. From the landingpage you will find an alternative inside the field "I want to" that says "create a new activity". The other alternative is in the sidebar, just click the "create activity"-button.</p>
          <h3>Do I have to be logged in during the whole time while searching a group?</h3>
          <p style={faqParagraph}>No, you dont't. In the activity you can change the notification settings of how you would like to be notified when the group is complete.</p>
          <h3>How long does it take to find a group?</h3>
          <p style={faqParagraph}>Some group searches can be very fast and some a bit slower. Make sure to configurate how you would like to be notified when the group search is done.</p>
          <h3>How do I cancel a group search?</h3>
          <p style={faqParagraph}>At the moment there is no support of canceling a group search.</p>
          <h3>Can I invite friends to join my group?</h3>
          <p style={faqParagraph}>Yes, you can. In every activity you will find a URL that can be shared among your friends.</p>

        </FFFWindow>
      </div>
    );
  }
}
