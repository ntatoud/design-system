import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Fonts',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const MapleMono: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <p className="font-thin">Maple Mono Thin</p>
      <p className="font-extralight">Maple Mono Extra Light</p>
      <p className="font-light">Maple Mono Light</p>
      <p className="font-normal">Maple Mono Normal</p>
      <p className="font-medium">Maple Mono Medium</p>
      <p className="font-semibold">Maple Mono Semi Bold</p>
      <p className="font-bold">Maple Mono Bold</p>
      <p className="font-extrabold">Maple Mono Extra Bold</p>
    </div>
  ),
};
