import React, { lazy, Suspense } from 'react';

const LazyJoinAsAudience = lazy(() => import('./JoinAsAudience'));

const JoinAsAudience = props => (
  <Suspense fallback={null}>
    <LazyJoinAsAudience {...props} />
  </Suspense>
);

export default JoinAsAudience;
