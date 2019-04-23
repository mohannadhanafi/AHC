import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';


const Table = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/contact/page`} />
    <Route path={`${match.url}/page`} component={asyncComponent(() => import('./Page'))} />
    <Route path={`${match.url}/add`} component={asyncComponent(() => import('./Add'))} />
    <Route path={`${match.url}/view`} component={asyncComponent(() => import('./View'))} />
    <Route path={`${match.url}/footer`} component={asyncComponent(() => import('./Footer'))} />
    <Route path={`${match.url}/:id`} component={asyncComponent(() => import('./Edit'))} />
  </Switch>
);

export default Table;
