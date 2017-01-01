import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import CurrentActivity    from './CurrentActivity.js';
import CurrentGroup       from './CurrentGroup.js';
import CurrentGroupSearch from './CurrentGroupSearch.js';
import CurrentUser        from './CurrentUser.js';
import foundActivities    from './foundActivities.js';
import foundProps         from './foundProps.js';
import foundReqs          from './foundReqs.js';
import myGroups           from './myGroups.js';
import socketIo           from './socketIo.js';

const rootReducer = combineReducers({
  CurrentActivity,
  CurrentGroup,
  CurrentGroupSearch,
  CurrentUser,
  foundActivities,
  foundProps,
  foundReqs,
  myGroups,
  socketIo,
  routing,
});

export default rootReducer;
