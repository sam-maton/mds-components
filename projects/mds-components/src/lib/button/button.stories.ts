import type { Meta, StoryObj } from '@storybook/angular';
import { MdsButtonComponent } from './button';

const meta: Meta<MdsButtonComponent> = {
  title: 'Components/Button',
  component: MdsButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'text'],
      description: 'Visual style of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
  render: (args) => ({
    props: args,
    template: `<mds-button [variant]="variant" [disabled]="disabled">Button</mds-button>`,
  }),
};

export default meta;
type Story = StoryObj<MdsButtonComponent>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    disabled: false,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'filled',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <mds-button variant="filled">Filled</mds-button>
        <mds-button variant="outlined">Outlined</mds-button>
        <mds-button variant="text">Text</mds-button>
        <mds-button variant="filled" [disabled]="true">Disabled</mds-button>
      </div>
    `,
  }),
};
