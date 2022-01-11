import React, { lazy, Suspense } from 'react';

const LazyActivateJoinAsAudience = lazy(() => import('./ActivateJoinAsAudience'));

const ActivateJoinAsAudience = props => (
  <Suspense fallback={null}>
    <LazyActivateJoinAsAudience {...props} />
  </Suspense>
);

export default ActivateJoinAsAudience;
