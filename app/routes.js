import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LandingForm from './views/LandingForm';


import Group from './views/group';
import CreateActivity from './views/CreateActivity';
import ActivityStatus from './views/ActivityStatus';
import FAQ from './views/FAQ';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingForm} />
    <Route path="/activitystatus" component={ActivityStatus} />
    <Route path="/group/:groupId" component={Group} />
    <Route path="/createactivity" component={CreateActivity} />
    <Route path="/FAQ"            component={FAQ} />
  </Route>
);
