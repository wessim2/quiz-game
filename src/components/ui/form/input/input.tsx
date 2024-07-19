import * as React from 'react';
import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'flex shadow-basic rounded-basic border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      inputSize: {
        default: 'h-10 w-80',
        lg: 'h-10 w-[426px]',
      },
    },
    defaultVariants: {
      inputSize: 'default',
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, inputSize, ...props }, ref) => {
    return (
      <div>
        <div className="relative flex items-center w-full">
          {icon && (
            <span className="absolute left-3 text-gray-typo">{icon}</span>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({ inputSize }),
              icon ? 'pl-10' : 'pl-3',
              className,
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
