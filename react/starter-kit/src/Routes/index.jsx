import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Loader from '../Layout/Loader';
import LayoutRoutes from './LayoutRoutes';
import PrivateRoute from './PrivateRoute';

const Routers = () => {
  return (
    <Fragment>
      <BrowserRouter basename={'/'}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={'/'} element={<PrivateRoute />}>
              <Route exact
                path={`${process.env.PUBLIC_URL}`}
                element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />}
              />
              <Route exact
                path={`/`}
                element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />}
              />
              <Route path={`/*`} element={<LayoutRoutes />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Fragment >
  );
};
export default Routers;