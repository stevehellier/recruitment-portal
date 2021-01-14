import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, ContractStats, PermStats, RecruitersActivity, LiveVacancies } from './Views';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Contract-Stats' component={ContractStats} />
        <Route exact path='/Perm-Stats' component={PermStats} />
        <Route exact path='/recruiters-activity' component={RecruitersActivity} />
        <Route exact path='/live-vacancies' component={LiveVacancies} />
        
        
      </Switch>
    </div>
  );
};
