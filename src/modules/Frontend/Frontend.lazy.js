import React, { lazy, Suspense } from 'react';



const LazyFrontend = lazy(() => import('./Frontend'));

const Frontend = props => (
  <Suspense fallback={null}>
    <LazyFrontend {...props} />
  </Suspense>
);

Frontend.routeProps = {
    path: '/front/entries',
    exact: true,
    element: <Frontend/>
};

export default Frontend;
