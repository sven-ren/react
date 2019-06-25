import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import loading from './loading';

const Home = Loadable({
  loader: () => import('@/routes/home/view'),
  loading,
});
const routes = [
    <Route
      key={'home'}
      path={`/home`}
      render={(props) => <Home {...props} />}
    />,
];

export default routes;
