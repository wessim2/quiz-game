import Button from '@/components/ui/button/button';
import { CategoryCards } from '@/components/ui/cards/category-card';
import Heading from '@/components/ui/heading/heading';
import { useCategories } from '@/features/categories/api/get-categories';
import { useUser } from '@/lib/auth';
import { Check, Clock, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProfileRoute = () => {
  const u = useUser();
  const { data: user } = u;

  const categories = useCategories();

  if (!categories.data) return null;
  console.log(u.data);
  return (
    <div className="flex flex-col p-4 shadow-basic rounded-basic border-2">
      <div className="flex flex-row gap-3 m-5 h-full w-full">
        <div className="w-72 h-52 hidden lg:block">
          <img
            src={user?.image}
            alt="User photo"
            className="object-cover h-full w-full rounded-basic"
          />
        </div>
        <div className="flex flex-col w-full justify-between">
          <div>
            <Heading size={'h3'}>{user?.fullName}</Heading>
            <p className="text-gray-typo text-center lg:text-left ">
              {user?.title}
            </p>
          </div>

          <div className="w-5/6 mt-5 bg-gray-300 rounded-full h-2.5 shadow-basic">
            <div
              className="bg-gray-typo h-2.5 rounded-full "
              style={{ width: `${user?.progress.quiz_passed}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 lg:flex lg:flex-row mt-3 gap-5 lg:gap-10">
            <div className="flex flex-row  lg:grid lg:grid-rows-2 lg:grid-flow-col gap-x-3 ">
              <div className="flex justify-center items-center w-12 h-12 lg:w-16 lg:h-16 rounded-lg shadow-basic border-2 row-span-2">
                <Flag className="w-6 h-6 lg:w-10 lg:h-10 text-gray-typo" />
              </div>
              <div className="flex flex-col  items-center">
                <Heading className="text-2xl">
                  {user?.progress.quiz_passed}
                </Heading>
                <p className="text-gray-typo text-center">Quiz Passed</p>
              </div>
            </div>

            <div className="flex flex-row lg:grid lg:grid-rows-2 lg:grid-flow-col gap-x-3">
              <div className="flex justify-center items-center w-12 h-12 lg:w-16 lg:h-16 rounded-lg shadow-basic border-2 row-span-2">
                <Clock className="w-6 h-6 lg:w-10 lg:h-10 text-gray-typo" />
              </div>
              <div className="flex flex-col  items-center">
                <Heading className="text-2xl">
                  {user?.progress.fastest_time}mins
                </Heading>
                <p className="text-gray-typo text-center">Fastest Time</p>
              </div>
            </div>

            <div className="flex flex-row lg:grid lg:grid-rows-2 lg:grid-flow-col gap-x-3">
              <div className="flex justify-center items-center w-12 h-12 lg:w-16 lg:h-16 rounded-lg shadow-basic border-2 row-span-2">
                <Check className="w-6 h-6 lg:w-10 lg:h-10 text-gray-typo" />
              </div>
              <div className="flex flex-col  items-center">
                <Heading className="text-2xl">
                  {user?.progress.correct_answers}
                </Heading>
                <p className="text-gray-typo text-center">Correct answer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="flex flex-col lg:w-[482px]">
          <div className="flex flex-row items-center space-x-2 lg:space-x-4 lg:justify-between">
            <Heading size={'h3'}>Achievements</Heading>
            <div className="lg:w-2/6 w-5/12 bg-gray-300 rounded-full h-2.5 shadow-basic">
              <div
                className="bg-gray-typo h-2.5 rounded-full "
                style={{ width: `${user?.achievements.length}%` }}
              ></div>
            </div>
          </div>
          <div className="lg:hidden flex items-center mx-auto">
            <Link to={'./achievements'}>
              <Button variant={'outline'}>View all</Button>
            </Link>
          </div>

          <div className="hidden lg:grid grid-flow-col p-4 h-60 w-full rounded-basic mt-2 shadow-basic border-2">
            {user?.achievements.map((item) => (
              <div key={item} className="flex flex-col items-center">
                <img className="w-16 h-16" src="/badge1.png" alt="badge" />
                <p className="text-center">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:w-[482px]">
          <div className="flex flex-row justify-between">
            <Heading size={'h3'}>Featured Categories</Heading>
            <Link to="/app/categories">
              <p className="text-gray-typo">View All</p>
            </Link>
          </div>
          <div className="grid grid-cols-1 mx-auto lg:grid-rows-2 lg:grid-flow-col gap-3 mt-2">
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
