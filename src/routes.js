import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContractStats } from './Views';
import { PermStats } from './Views';
import { Home } from './Views';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Contract-Stats' component={ContractStats} />
        <Route exact path='/Perm-Stats' component={PermStats} />
      </Switch>
    </div>
  );
};
