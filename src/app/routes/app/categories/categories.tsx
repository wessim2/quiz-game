import { CategoryCards } from '@/components/ui/cards/category-card';
import { Input } from '@/components/ui/form/input/input';
import Heading from '@/components/ui/heading/heading';
import { useCategories } from '@/features/categories/api/get-categories';
import { useState } from 'react';

export const CategoriesRoute = () => {
  const [search, setSearch] = useState('');
  const categories = useCategories();

  if (!categories.data) return null;

  return (
    <div className="flex flex-col p-4 mx-auto lg:mx-0">
      <Heading size={'h2'}>Select Topic</Heading>
      <p className="text-gray-typo text-center mb-2 lg:text-left">
        Featured Categories
      </p>
      <Input
        placeholder="Search category"
        type="text"
        className="h-12 items-center mx-auto lg:mx-0"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 items-center mx-auto lg:mx-0 lg:grid-cols-4 grid-flow-row gap-y-7 mt-3">
        {categories.data
          .filter((item) => {
            return search == ''
              ? item
              : item.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((category) => {
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
