import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import loading from './loading';

const Home = Loadable({
  loader: () => import('@/routes/home/view'),
  loading,
});
const Poetry = Loadable({
  loader: () => import('@/routes/poetry/view'),
  loading,
});
const PoetryDetail = Loadable({
  loader: () => import('@/routes/poetry/detail/view'),
  loading,
});
const routes = [
    <Route
      key={'home'}
      path={`/home`}
      render={(props) => <Home {...props} />}
    />,
    <Route
      key={'poetry'}
      path={`/poetry`}
      render={(props) => <Poetry {...props} />}
    />,
    <Route
      key={'poetryDetail'}
      path={`/poetryDetail`}
      render={(props) => <PoetryDetail {...props} />}
    />,
];

export default routes;
