import React, { lazy, Suspense } from 'react';

const LazyAddToSchedule = lazy(() => import('./AddToSchedule'));

const AddToSchedule = props => (
  <Suspense fallback={null}>
    <LazyAddToSchedule {...props} />
  </Suspense>
);

export default AddToSchedule;
