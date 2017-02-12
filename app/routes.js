import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LandingForm from './views/LandingForm';
import * as actions from './redux/actions';

import Group from          './views/group';
import CreateActivity from './views/CreateActivity';
import ActivityStatus from './views/ActivityStatus';
import FAQ from            './views/FAQ';
import About from          './views/About';

export default (store) => {
  const stripAndSaveToken = (nextState, replace, cb) => {
    const token = nextState.location.query.access_token;
    if (token) {
      store.dispatch(actions.users.readTokenSuccess({token}));
      replace('/');
    }
    cb();
  }

  return (
    <Route path="/" component={App} onEnter={stripAndSaveToken}>
      <IndexRoute component={LandingForm} />
      <Route path="/activitystatus" component={ActivityStatus} />
      <Route path="/group/:groupId" component={Group} />
      <Route path="/createactivity" component={CreateActivity} />
      <Route path="/FAQ"            component={FAQ} />
      <Route path="/About"          component={About} />
    </Route>
  )
};
