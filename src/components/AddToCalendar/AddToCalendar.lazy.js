import React, { lazy, Suspense } from 'react';

const LazyAddToCalendar = lazy(() => import('./AddToCalendar'));

const AddToCalendar = props => (
  <Suspense fallback={null}>
    <LazyAddToCalendar {...props} />
  </Suspense>
);

export default AddToCalendar;
