import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';


const Table = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/plan/viewplan`} />
    <Route path={`${match.url}/viewplan`} component={asyncComponent(() => import('./View'))} />
    <Route path={`${match.url}/addplan`} component={asyncComponent(() => import('./Add'))} />
    <Route path={`${match.url}/settings`} component={asyncComponent(() => import('./Settings'))} />
    <Route path={`${match.url}/:id`} component={asyncComponent(() => import('./Edit'))} />
  </Switch>
);

export default Table;
