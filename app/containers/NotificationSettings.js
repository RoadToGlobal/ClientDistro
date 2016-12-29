import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {verticalContainer} from '../DynamicStyles/common';

const notificationContainer = {
  ...verticalContainer,
  justifyContent: 'center',
  fontSize: '14px',
};
const settingsParagraph = {
  marginBottom: '0',
};
const notificationSelectStyle = {
  marginLeft: '10px',
};

class NotificationSettings extends React.Component {
  static propTypes = {
    CurrentGroup: PropTypes.object,
  };

  render() {
    let NotificationSettingsMock = {
      newMessage: 'beep',
      newMember: 'beep',
      GroupFilled: 'email',
    };

    return (
      <div style={notificationContainer}>
      <h3 style={{marginTop: '0'}}>Notification Settings:</h3>
        <p style={settingsParagraph}>When someone post a new message</p>
        <p>Notify me with:
          <select style={notificationSelectStyle}>
            <option>
              {NotificationSettingsMock.newMessage}
            </option>
          </select>
        </p>
        <p style={settingsParagraph}>When someone new arrives in the group</p>
        <p>Notify me with:
          <select style={notificationSelectStyle}>
            <option>
              {NotificationSettingsMock.newMember}
            </option>
          </select>
        </p>
        <p style={settingsParagraph}>When the group is filled</p>
        <p>Notify me with:
          <select style={notificationSelectStyle}>
            <option>
              {NotificationSettingsMock.GroupFilled}
            </option>
          </select>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CurrentGroup: state.CurrentGroup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationSettings);
