import { LoginForm } from '@/features/auth/components/login-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const LoginRoute = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');
  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
      <div className="md:hidden">
        <img
          alt="Authentication"
          loading="lazy"
          width="1280"
          height="843"
          decoding="async"
          data-nimg="1"
          className="block dark:hidden"
          src="/login.jpeg"
        />
        <img
          alt="Authentication"
          loading="lazy"
          width="1280"
          height="843"
          decoding="async"
          data-nimg="1"
          className="hidden dark:block"
          src="/login.jpeg"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <a
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8"
          href="/examples/authentication"
        >
          Login
        </a>
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
              <h1 className="text-2xl font-extrabold tracking-tight">
                Login to your Account
              </h1>
              <p className="text-sm text-gray-typo text-muted-foreground">
                with your registered Email Address
              </p>
            </div>
            <div className="grid gap-6">
              <LoginForm
                onSuccess={() =>
                  navigate(`${redirectTo ? `${redirectTo}` : '/app/profile'}`, {
                    replace: true,
                  })
                }
              />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
