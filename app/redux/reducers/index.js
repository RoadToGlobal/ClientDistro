import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import CurrentActivity from './CurrentActivity.js';
import CurrentGroup from './CurrentGroup.js';
import CurrentGroupSearch from './CurrentGroupSearch.js';
import CurrentUser from './CurrentUser.js';
import foundActivities from './foundActivities.js';
import foundProps from './foundProps.js';
import foundReqs from './foundReqs.js';

const rootReducer = combineReducers({
  CurrentActivity,
  CurrentGroup,
  CurrentGroupSearch,
  CurrentUser,
  foundActivities,
  foundProps,
  foundReqs,
  routing,
});

export default rootReducer;
