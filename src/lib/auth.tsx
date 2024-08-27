import { AuthContext } from '@/context/auth-context';
import { UserProfile } from '@/types/api';
import { useContext } from 'react';
import { configureAuth } from 'react-query-auth';
import { Navigate, useLocation } from 'react-router-dom';
import { z } from 'zod';

export const LoginInputSchema = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
  password: z.string().min(1, 'Required'),
});

export type loginSchema = z.infer<typeof LoginInputSchema>;

const logout = async (): Promise<unknown> => {
  try {
    return {};
  } catch (e) {}
};

const getUser = (): UserProfile => {
  return {
    id: '12345',
    email: 'user@example.com',
    fullName: 'John Doe',
    phoneNumber: '+1234567890',
    achievements: [
      'Completed React Course',
      'Top Scorer in Quiz',
      'Fastest Time in Coding Challenge',
    ],
    progress: {
      quiz_passed: 10,
      fastest_time: 120, // time in seconds
      correct_answers: 200,
    },
    title: 'Genius1',
    image: '/avatar/user.jpeg',
  };
};

const authConfig = {
  userFn: getUser,
  loginFn: async (data: loginSchema) => {
    return getUser();
  },
  registerFn: async () => {
    return {} as UserProfile;
  },
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const location = useLocation();

  if (!currentUser) {
    return (
      <Navigate
        to={`/auth/login?redirectTo=${encodeURIComponent(location.pathname)}`}
        replace
      />
    );
  }

  return children;
};
