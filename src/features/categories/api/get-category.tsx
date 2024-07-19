import { queryOptions, useQuery } from '@tanstack/react-query';
import { getCategories } from './get-categories';
import { QueryConfig } from '@/lib/react-query';

export const getCategory = (categoryId: string) => {
  return getCategories().find((category) => category.id === categoryId);
};

export const getCategoryQueryOptions = (categoryId: string) => {
  return queryOptions({
    queryKey: ['category', categoryId],
    queryFn: () => getCategory(categoryId),
  });
};

type UseCategoryoptions = {
  categoryId: string;
  queryConfig?: QueryConfig<typeof getCategoryQueryOptions>;
};

export const useCategory = ({
  categoryId,
  queryConfig,
}: UseCategoryoptions) => {
  return useQuery({
    ...getCategoryQueryOptions(categoryId),
    ...queryConfig,
  });
};
