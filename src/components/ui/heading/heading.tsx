import { FC } from 'react';

import { cn } from '../../../utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva('text-gray-typo text-center lg:text-left', {
  variants: {
    size: {
      default: 'text-3xl',
      h1: 'text-4xl ',
      h2: 'text-3xl ',
      h3: 'text-2xl',
    },
    weight: {
      default: 'font-bold',
      extrabold: 'font-extrabold',
      semibold: 'font-semibold',
    },
  },
  defaultVariants: {
    size: 'default',
    weight: 'default',
  },
});

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading: FC<LargeHeadingProps> = ({
  children,
  className,
  size,
  color,
  weight,
  ...props
}) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, weight, className }))}>
      {children}
    </h1>
  );
};

export default Heading;
