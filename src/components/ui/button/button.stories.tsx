import { Meta, StoryObj } from '@storybook/react';
import { GitBranch } from 'lucide-react';
import Button from './button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Login',
    variant: 'default',
    size: 'lg',
  },
};
export const Outline: Story = {
  args: {
    children: (
      <>
        <GitBranch />
        <p>Login with google</p>
      </>
    ),
    variant: 'outline',
    size: 'lg',
  },
};
