import { Bell, Headset, Home, LogOut, Search, User } from 'lucide-react';
import Button from '../ui/button/button';
import { Input } from '../ui/form/input/input';
import Heading from '../ui/heading/heading';
import { NavLink } from 'react-router-dom';
import { cn } from '@/utils/cn';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const navigation = [
    { name: 'dashboard', to: './profile', icon: Home },
    { name: 'support', to: './support', icon: Headset },
    { name: 'notification', to: './notification', icon: Bell },
  ];

  return (
    <>
      <nav className="fixed z-30 bg-whitedefault w-full ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3 flex flex-row items-center justify-between gap-4 ">
          <Heading
            size="h2"
            weight={'extrabold'}
            className="text-xl lg:text-3xl"
          >
            Quiz Time
          </Heading>
          <Input placeholder="Search..." type="text" icon={<Search />} />
          <NavLink className="hidden md:flex" to={'/app/categories'}>
            <Button variant={'default'}>Start Quiz</Button>
          </NavLink>
          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center justify-center rounded-full overflow-hidden w-12 h-12 lg:w-16 lg:h-16 bg-gray-200`">
              <img
                src="/avatar/user.jpeg"
                alt="User photo"
                className="object-cover w-full h-full "
              />
            </div>
            <p className="hidden md:flex">Name of avatar</p>
          </div>
        </div>
      </nav>
      <div className="flex pt-16 overflow-hidden bg-whitedefault">
        <aside className="fixed top-0 left-0 z-20 flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width">
          <div className="flex flex-col items-center px-2 py-4 mx-2 justify-between h-full">
            <div className="flex flex-col items-center gap-4 px-2 py-4 mx-2 ">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'bg-primary-foreground text-primary border-2 border-primary hover:opacity-60 gap-4 w-52 h-16 inline-flex items-center justify-center whitespace-nowrap rounded-[30px] text-sm font-medium transition-colors',
                      isActive && 'bg-primary text-primary-foreground',
                    )
                  }
                >
                  <item.icon />
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className='order-last bg-primary text-primary-foreground gap-4 w-52 h-16 inline-flex items-center justify-center whitespace-nowrap rounded-[30px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"'>
              <LogOut />
              logout
            </div>
          </div>
        </aside>
        <div className="fixed inset-0 z-10 hidden pt-16"></div>
        <div className="relative   w-full h-full overflow-y-auto mx-4 lg:ml-64">
          <main>
            <div className="px-4 pt-6 ">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
