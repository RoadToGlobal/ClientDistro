import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class NotificationSettings extends React.Component {


  render() {
    return (
      <div>
      <p>When someone post a new message</p>
      <p>Notify me with:
        <select>
          <option>
            {this.props.CurrentGroupSearch.NotificationSettings.newMessage}
          </option>
        </select>
      </p>
      <p>When someone new arrives in the group</p>
      <p>Notify me with:
        <select>
          <option>
            {this.props.CurrentGroupSearch.NotificationSettings.newMember}
          </option>
        </select>
      </p>
      <p>When the group is filled</p>
      <p>Notify me with:
        <select>
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
