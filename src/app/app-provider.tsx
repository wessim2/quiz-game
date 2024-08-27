import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/auth-context';
import { QuizProvider } from '@/context/quiz-params-context';
import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<div>Loading ....</div>}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <AuthProvider>
          <QuizProvider>{children}</QuizProvider>
        </AuthProvider>
      </QueryClientProvider>
    </Suspense>
  );
};
