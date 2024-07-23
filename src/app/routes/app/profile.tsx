import { CategoryCards } from '@/components/ui/cards/category-card';
import Heading from '@/components/ui/heading/heading';
import { useCategories } from '@/features/categories/api/get-categories';
import { Check, Clock, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProfileRoute = () => {
  const user = {
    acheivements: [
      {
        name: 'Comeback',
        badge: '/badge1.png',
      },
      {
        name: 'Winner',
        badge: '/badge1.png',
      },
      {
        name: 'Lucky',
        badge: '/badge1.png',
      },
    ],
  };
  const categories = useCategories();

  if (!categories.data) return null;

  return (
    <div className="flex flex-col p-4 shadow-basic rounded-basic border-2">
      <div className=" flex flex-row gap-3 m-5 h-full w-full">
        <div className="w-72 h-52">
          <img
            src="/avatar/user.jpeg"
            alt="User photo"
            className="object-cover h-full w-full rounded-basic"
          />
        </div>
        <div className="flex flex-col w-full justify-between">
          <div>
            <Heading size={'h3'}>User Name</Heading>
            <p className="text-gray-typo ">Bonus Booster 25</p>
          </div>

          <div className="w-5/6 mt-5 bg-gray-300 rounded-full h-2.5 shadow-basic">
            <div
              className="bg-gray-typo h-2.5 rounded-full "
              style={{ width: '60%' }}
            ></div>
          </div>

          <div className="flex flex-row mt-3 gap-10">
            <div className="grid grid-rows-2 grid-flow-col gap-x-3 ">
              <div className="flex justify-center items-center w-16 h-16 rounded-lg shadow-basic border-2 row-span-2">
                <Flag className="w-10 h-10 text-gray-typo" />
              </div>
              <Heading>27</Heading>
              <p className="text-gray-typo">Quiz Passed</p>
            </div>

            <div className="grid grid-rows-2 grid-flow-col gap-x-3 ">
              <div className="flex justify-center items-center w-16 h-16 rounded-lg shadow-basic border-2 row-span-2">
                <Clock className="w-10 h-10 text-gray-typo" />
              </div>
              <Heading>27mins</Heading>
              <p className="text-gray-typo">Fastest Time</p>
            </div>

            <div className="grid grid-rows-2 grid-flow-col gap-x-3 ">
              <div className="flex justify-center items-center w-16 h-16 rounded-lg shadow-basic border-2 row-span-2">
                <Check className="w-10 h-10 text-gray-typo" />
              </div>
              <Heading>200</Heading>
              <p className="text-gray-typo">Correct answer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row  gap-20">
        <div className="flex flex-col w-[482px]">
          <div className="flex flex-row items-center space-x-4 justify-between">
            <Heading size={'h3'}>Achievements</Heading>
            <div className="w-2/6  bg-gray-300 rounded-full h-2.5 shadow-basic">
              <div
                className="bg-gray-typo h-2.5 rounded-full "
                style={{ width: '60%' }}
              ></div>
            </div>
          </div>

          <div className="grid grid-flow-col p-4 h-60 w-full rounded-basic mt-2 shadow-basic border-2">
            {user.acheivements.map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                <img className="w-16 h-16" src={item.badge} alt="badge" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[482px]">
          <div className="flex flex-row justify-between">
            <Heading size={'h3'}>Featured Categories</Heading>
            <Link to="/app/categories">
              <p className="text-gray-typo">View All</p>
            </Link>
          </div>
          <div className="grid grid-rows-2 grid-flow-col gap-3 mt-2">
            {categories.data.slice(0, 4).map((category) => {
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
      </div>
    </div>
  );
};
