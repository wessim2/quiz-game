import { toast } from '@/components/ui/use-toast';
import Axios, { InternalAxiosRequestConfig } from 'axios';

const url : string = import.meta.env.VITE_TRIVIA_API

function authRequestInterceptor(config : InternalAxiosRequestConfig) {
  if ( config.headers){
    config.headers.Accept = "application/json"
  }
  return config
}

export const api = Axios.create({
  baseURL: url,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    toast({variant:"destructive",title : "Error",description:message})

    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams();
      const redirectTo = searchParams.get('redirectTo');
      window.location.href = `/auth/login?redirectTo=${redirectTo}`;
    }

    return Promise.reject(error);
  },
);
