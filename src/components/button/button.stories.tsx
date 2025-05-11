import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '@/components/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
    </div>
  ),
};
