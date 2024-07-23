import { Link } from 'react-router-dom';

export const NotFoundRoute = () => {
  return (
    <div className="mt-52 flex flex-col items-center font-semibold gap-3">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/app/profile"
        replace
        className="bg-primary-foreground text-primary border-2 border-primary hover:opacity-60 gap-4 w-24 h-11 inline-flex items-center justify-center whitespace-nowrap rounded-[30px] text-sm font-medium transition-colors"
      >
        Go to Home
      </Link>
    </div>
  );
};
