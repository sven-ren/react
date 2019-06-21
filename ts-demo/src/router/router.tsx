import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '@/routes/home/view';
const routes = [
    <Route
      key={'home'}
      path={`/home`}
      render={(props) => <Home {...props} />}
    />,
];

export default routes;
