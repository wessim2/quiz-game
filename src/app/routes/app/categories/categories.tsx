import { CategoryCards } from '@/components/ui/cards/category-card';
import Heading from '@/components/ui/heading/heading';
import { useCategories } from '@/features/categories/api/get-categories';

export const CategoriesRoute = () => {
  const categories = useCategories();

  if (!categories.data) return null;
  console.log(categories.data);

  return (
    <div className="flex flex-col p-4">
      <Heading size={'h2'}>Select Topic</Heading>
      <p className="text-gray-typo">Featured Categories</p>
      <div className="grid grid-cols-4 grid-flow-row gap-y-7 mt-3">
        {categories.data.map((category) => {
          return (
            <CategoryCards
              id={category.id}
              name={category.name}
              image={category.name}
              key={category.id}
            />
          );
        })}
      </div>
    </div>
  );
};
