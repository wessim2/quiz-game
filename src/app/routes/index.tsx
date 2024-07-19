import { QueryClient } from '@tanstack/react-query';
import { createBrowserRouter } from 'react-router-dom';
import { AppRoot } from './app/root';

export const createRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: '/auth/login',
      lazy: async () => {
        let { LoginRoute } = await import('./auth/login');
        return { Component: LoginRoute };
      },
    },
    {
      path: '/app',
      element: <AppRoot />,
      children: [
        {
          path: 'profile',
          lazy: async () => {
            const { ProfileRoute } = await import('./app/profile');
            return { Component: ProfileRoute };
          },
        },
        {
          path: 'categories',
          lazy: async () => {
            const { CategoriesRoute } = await import(
              './app/categories/categories'
            );
            return { Component: CategoriesRoute };
          },
        },
        {
          path: 'categories/:categoryId',
          lazy: async () => {
            const { CategoryRoute } = await import('./app/categories/category');
            return { Component: CategoryRoute };
          },
        },
      ],
    },
  ]);
