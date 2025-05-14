import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Check, Mail } from 'lucide-react';

import { Button } from '@/components/atoms/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'default',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="primary" size="default">
        Primary
      </Button>
      <Button variant="secondary" size="default">
        Secondary
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="primary" size="sm">
        Small
      </Button>
      <Button variant="primary" size="default">
        Medium
      </Button>
      <Button variant="primary" size="lg">
        Large
      </Button>
      <Button variant="primary" size="icon">
        <Mail />
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="primary" size="default">
        <Mail /> Email
      </Button>
      <Button variant="primary" size="default">
        Confirm <Check />
      </Button>
    </div>
  ),
};
