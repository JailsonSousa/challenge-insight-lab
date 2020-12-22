import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import JobDetails from '../pages/JobDetails';
import Api from '../pages/Api';
import Faq from '../pages/Faq';
import Charts from '../pages/Charts';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/details/:id" exact component={JobDetails} />
    <Route path="/charts" exact component={Charts} />
    <Route path="/api" exact component={Api} />
    <Route path="/faq" exact component={Faq} />
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
