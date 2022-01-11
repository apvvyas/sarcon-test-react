import React, { lazy, Suspense } from 'react';

const LazyActivateJoinAsSpeaker = lazy(() => import('./ActivateJoinAsSpeaker'));

const ActivateJoinAsSpeaker = props => (
  <Suspense fallback={null}>
    <LazyActivateJoinAsSpeaker {...props} />
  </Suspense>
);

export default ActivateJoinAsSpeaker;
