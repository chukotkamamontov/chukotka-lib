// import type { Meta, StoryObj } from '@storybook/react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

// Метаданные компонента
const meta: Meta<typeof Button> = {
  title: 'Components/Button', // Путь в навигации Storybook
  component: Button,
  tags: ['autodocs'], // Автоматическая генерация документации
  parameters: {
    layout: 'centered', // Центрирование компонента
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    // size: {
    //   control: 'select',
    //   options: ['sm', 'md', 'lg'],
    // },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Базовая история
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    // size: 'md',
  },
};

// Вторичная кнопка
export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
};

// Отключенная кнопка
export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

// Маленькая кнопка
export const Small: Story = {
  args: {
    ...Primary.args,
    // size: 'sm',
  },
};