import { useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { createRouter } from './routes';
import { RouterProvider } from 'react-router';
import { AppProvider } from './app-provider';

const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
