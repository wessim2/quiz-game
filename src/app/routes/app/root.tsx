import { MainErrorFallback } from '@/components/errors/main';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';

export const AppRoot = () => {
  const location = useLocation();
  return (
    <DashboardLayout>
      <Suspense fallback={<div>Loading .....</div>}>
        <ErrorBoundary
          key={location.pathname}
          FallbackComponent={MainErrorFallback}
        >
          <Outlet />
        </ErrorBoundary>
      </Suspense>
    </DashboardLayout>
  );
};
