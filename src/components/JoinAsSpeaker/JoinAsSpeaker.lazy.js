import React, { lazy, Suspense } from 'react';

const LazyJoinAsSpeaker = lazy(() => import('./JoinAsSpeaker'));

const JoinAsSpeaker = props => (
  <Suspense fallback={null}>
    <LazyJoinAsSpeaker {...props} />
  </Suspense>
);

export default JoinAsSpeaker;
