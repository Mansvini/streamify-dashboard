import React, { Suspense } from 'react';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load the Dashboard component
const Dashboard = React.lazy(() => import('./components/Dashboard'));

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Dashboard />
    </Suspense>
  );
};

export default App;