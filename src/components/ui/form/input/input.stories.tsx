import { Meta, StoryObj } from '@storybook/react';
import { GitBranch } from 'lucide-react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: 'text',
    value: 'Dashboard',
  },
};

export const WithPlaceholder: Story = {
  args: {
    type: 'text',
    placeholder: 'Search....',
    inputSize: 'lg',
  },
};

export const WithIcon: Story = {
  args: {
    type: 'text',
    placeholder: 'Search....',
    icon: <GitBranch />,
  },
};
