import React, { lazy, Suspense } from 'react';

const LazyActivateAddToCalendar = lazy(() => import('./ActivateAddToCalendar'));

const ActivateAddToCalendar = props => (
  <Suspense fallback={null}>
    <LazyActivateAddToCalendar {...props} />
  </Suspense>
);

export default ActivateAddToCalendar;
