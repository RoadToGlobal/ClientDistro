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
  border: 'none',
};

class NotificationSettings extends React.Component {
  static propTypes = {
    CurrentGroupSearch: PropTypes.object,
  };

  render() {
    return (
      <div style={notificationContainer}>
      <h3 style={{marginTop: '0'}}>Notification Settings:</h3>
        <p style={settingsParagraph}>When someone post a new message</p>
        <p>Notify me with:
          <select style={notificationSelectStyle}>
            <option>
              {this.props.CurrentGroupSearch.NotificationSettings.newMessage}
            </option>
          </select>
        </p>
        <p style={settingsParagraph}>When someone new arrives in the group</p>
        <p>Notify me with:
          <select style={notificationSelectStyle}>
            <option>
              {this.props.CurrentGroupSearch.NotificationSettings.newMember}
            </option>
          </select>
        </p>
        <p style={settingsParagraph}>When the group is filled</p>
        <p>Notify me with:
          <select style={notificationSelectStyle}>
            <option>
              {this.props.CurrentGroupSearch.NotificationSettings.GroupFilled}
            </option>
          </select>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CurrentGroupSearch: state.CurrentGroupSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSettings: (settings) => (dispatch({
      type: 'CURRENT_GROUP_SEARCH_EXAMPLE',
      data: 'current group search action triggered',
    })),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationSettings);
