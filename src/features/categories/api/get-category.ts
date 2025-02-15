import { queryOptions, useQuery } from '@tanstack/react-query';
import { getCategories } from './get-categories';
import { QueryConfig } from '@/lib/react-query';
import { Category } from '@/types/api';
import { useContext } from 'react';

export const getCategory = async (categoryId: string) : Promise<Category | undefined> => {
  const categories = await getCategories()

  const category =  categories.find((category) => category.id == categoryId);
  console.log(categories)
  return category;
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
