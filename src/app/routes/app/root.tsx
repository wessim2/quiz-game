import DashboardLayout from '@/components/layouts/dashboard-layout';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const AppRoot = () => {
  const location = useLocation();
  return (
    <DashboardLayout>
      <Suspense fallback={<div>Loading .....</div>}>
        <Outlet />
      </Suspense>
    </DashboardLayout>
  );
};
