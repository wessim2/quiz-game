import { Meta, StoryObj } from '@storybook/react';
import Heading from './heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Login to your account',
    size: 'default',
  },
};
export const Outline: Story = {
  args: {
    children: 'Large heading test h1 ',
    size: 'h1',
  },
};

export const H1: Story = {
  args: {
    children: 'Large heading test h1 extra',
    size: 'h1',
    weight: 'extrabold',
  },
};

export const H2: Story = {
  args: {
    children: 'Large heading test h2 ',
    size: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'Large heading test h3 extra',
    size: 'h3',
    weight: 'semibold',
  },
};

export const H3b: Story = {
  args: {
    children: 'Large heading test h3',
    size: 'h3',
    weight: 'extrabold',
  },
};
