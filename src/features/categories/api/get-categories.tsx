import { QueryConfig, queryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getCategories = () => {
  return [
    {
      id: '1',
      name: 'History',
      image: '/categories/history.jpeg',
    },
    {
      id: '2',
      name: 'Technology',
      image: '/categories/technology.jpeg',
    },
    {
      id: '3',
      name: 'Agriculture',
      image: '/categories/agriculture.jpeg',
    },
    {
      id: '4',
      name: 'Medecine',
      image: '/categories/medecine.jpeg',
    },
  ];
};

export const getCategoriesQueryOption = () => {
  return queryOptions({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  });
};

type UseCategoriesOptions = {
  queryConfig?: QueryConfig<typeof getCategoriesQueryOption>;
};

export const useCategories = ({ queryConfig }: UseCategoriesOptions = {}) => {
  return useQuery({
    ...getCategoriesQueryOption(),
    ...queryConfig,
  });
};
