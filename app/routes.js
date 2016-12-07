import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LandingForm from './views/LandingForm';

import Group from './views/group';
import ActivityStatus from './views/ActivityStatus';

export default (
  <Route path="/" component={App}>
    <IndexRoute path="/LandingForm" component={LandingForm} />
    <Route path="/activitystatus" component={ActivityStatus} />
    <Route path="/group" component={Group} />
  </Route>
);
