import React, { lazy, Suspense } from 'react';

const LazyActivateAddToSchedule = lazy(() => import('./ActivateAddToSchedule'));

const ActivateAddToSchedule = props => (
  <Suspense fallback={null}>
    <LazyActivateAddToSchedule {...props} />
  </Suspense>
);

export default ActivateAddToSchedule;
