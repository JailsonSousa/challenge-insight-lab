import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';


import Home from '../pages/Home';
import Api from '../pages/Api';
import Faq from '../pages/Faq';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/api" exact component={Api} />
    <Route path="/faq" exact component={Faq} />
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
