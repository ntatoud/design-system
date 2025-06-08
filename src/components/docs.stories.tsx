import { Button, type ButtonProps } from '@/components/button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Mail } from 'lucide-react';

const meta = {
  component: Button,
  title: 'Components/ui/Button',
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

const variants: ButtonProps['variant'][] = [
  'default',
  'destructive',
  'ghost',
  'link',
  'outline',
  'secondary',
];
const sizes: ButtonProps['size'][] = ['default', 'lg', 'sm'];

export const Basic: Story = {
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: {
      options: variants,
    },
    size: {
      options: sizes,
    },
  },
};

export const ButtonLink: Story = {
  args: {
    children: (
      <a href="#" rel="noreferrer noopener" target="_blank">
        Voir plus
      </a>
    ),
    asChild: true,
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      Button <Mail />
    </Button>
  ),
};
