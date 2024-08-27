import GoogleLogin from '@/features/auth/components/google-login';
import { RegisterForm } from '@/features/auth/components/register-form';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export const RegisterRoute = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');
  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
      <div className="container grid relative h-[800px] flex-col  items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8"
          to="/auth/login"
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute bg-cover inset-0 bg-zinc-900 blur-sm">
            <img src="/login.jpeg" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-20 ml-auto">
            <blockquote className="space-y-2 lg:w-52">
              <p className="text-lg">
                “Those people who develop the ability to continuously acquire
                new and better forms of knowledge that they can apply to their
                work and to their lives will be the movers and shakers in our
                society for the indefinite future”
              </p>
              <footer className="text-lg font-extrabold">Brian Tracy</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-3xl font-extrabold tracking-tight">
                Create a new account
              </h1>
            </div>
            <div className="grid gap-6">
              <RegisterForm
                onSuccess={() =>
                  navigate(`${redirectTo ? `${redirectTo}` : '/auth/login'}`, {
                    replace: true,
                  })
                }
              />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-sm text-gray-typo text-muted-foreground">
                    Or Register with
                  </span>
                </div>
              </div>
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
