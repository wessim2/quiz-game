import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Category } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getCategories = () : Promise<Category[]> => {
  return api.get("/api_category.php").then(response => {
    return response.data.trivia_categories
  })
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
