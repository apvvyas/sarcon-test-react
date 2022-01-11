import React, { lazy, Suspense } from 'react';

const LazyListEntry = lazy(() => import('./ListEntry'));

const ListEntry = props => (
  <Suspense fallback={null}>
    <LazyListEntry {...props} />
  </Suspense>
);

export default ListEntry;
