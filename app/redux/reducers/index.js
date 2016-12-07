import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import Activities from './Activities.js';
import CurrentActivity from './CurrentActivity.js';
import CurrentGroup from './CurrentGroup.js';
import CurrentGroupSearch from './CurrentGroupSearch.js';
import CurrentUser from './CurrentUser.js';
import Props from './Props.js';
import Reqs from './Reqs.js';

const rootReducer = combineReducers({
  Activities,
  CurrentActivity,
  CurrentGroup,
  CurrentGroupSearch,
  CurrentUser,
  Props,
  Reqs,
  routing,
});

export default rootReducer;
