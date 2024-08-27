import Button from '@/components/ui/button/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/form/input/input';
import { useToast } from '@/components/ui/use-toast';
import { signUpUser } from '@/firebase/firebase';
import { RegisterInputSchema, registerSchema } from '@/types/register';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type LoginFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<registerSchema>({
    resolver: zodResolver(RegisterInputSchema),
  });

  async function onSubmit(value: registerSchema) {
    try {
      setIsLoading(true);
      // Send the email and password to firebase
      const userCredential = await signUpUser(value.email, value.password);
      if (userCredential) {
        navigate('/auth/login');
      }
      setIsLoading(false);
    } catch (error: any) {
      toast({
        title: 'User Registration Failed',
        description: error.message,
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            isLoading={isLoading}
            className="mt-4 inline-flex items-center justify-center mx-auto whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            type="submit"
          >
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
};
