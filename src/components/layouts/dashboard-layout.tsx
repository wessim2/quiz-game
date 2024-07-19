import { Bell, Headset, Home, LogOut, Search, User } from 'lucide-react';
import Button from '../ui/button/button';
import { Input } from '../ui/form/input/input';
import Heading from '../ui/heading/heading';
import { NavLink } from 'react-router-dom';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const navigation = [
    { name: 'dashboard', to: '.', icon: Home },
    { name: 'support', to: './support', icon: Headset },
    { name: 'notification', to: './notification', icon: Bell },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-whitedefault">
      <header className="sticky top-0 z-30 bg-whitedefault flex flex-row h-28 items-center justify-between gap-4 px-4">
        <Heading size="h2" weight={'extrabold'}>
          Quiz Time
        </Heading>
        <Input placeholder="Search..." type="text" icon={<Search />} />
        <NavLink to={'/app/categories'}>
          <Button variant={'default'}>Start Quiz</Button>
        </NavLink>
        <div className="flex flex-row items-center gap-2">
          <div className="flex items-center justify-center rounded-full overflow-hidden w-16 h-16 bg-gray-200`">
            <img
              src="https://github.com/shadcn.png"
              alt="User photo"
              className="object-cover w-full h-full"
            />
          </div>
          <p>Name of avatar</p>
        </div>
      </header>

      <div className="flex flex-row flex-1">
        <aside className="hidden w-60 left-0 flex-col bg-whitedefault sm:flex">
          <nav className="flex flex-col items-center px-2 py-4 mx-2 justify-between h-full">
            <div className="flex flex-col items-center gap-4 px-2 py-4 mx-2 ">
              {navigation.map((item) => (
                <div className="bg-primary text-primary-foreground gap-4 w-52 h-16 inline-flex items-center justify-center whitespace-nowrap rounded-[30px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  <item.icon />
                  {item.name}
                </div>
              ))}
            </div>
            <div className='order-last bg-primary text-primary-foreground gap-4 w-52 h-16 inline-flex items-center justify-center whitespace-nowrap rounded-[30px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"'>
              <LogOut />
              logout
            </div>
          </nav>
        </aside>
        <main className=" flex-1 mx-4 mb-4 p-4 border shadow-basic rounded-basic ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
