import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonButtonProps, LinkButtonProps } from './button';
import { mockButtonProps } from './button.mocks';

const meta = {
	title: 'templates/Button',
	component: Button,
	argTypes: {
		text: {
			name: 'Text',
			description: 'The text to display on the button.',
			table: {
				category: 'Content',
			},
		},
		href: {
			name: 'href',
			description: 'The link to navigate to',
			table: { category: 'Content' },
		},

		variant: {
			name: 'Variant',
			description: 'The color variant of the button.',
			table: {
				category: 'Appearance',
				defaultValue: { summary: 'default' },
			},
			options: ['red', 'green', 'default'],
			control: { type: 'select' },
		},
		buttonType: {
			name: 'Button Type',
			description: 'The type of button. (<a href> or <button>)',
			table: {
				category: 'Control',
				defaultValue: { summary: 'button' },
			},
			options: ['button', 'submit', 'reset'],
			control: { type: 'radio' },
			defaultValue: 'button',
		},
		outline: {
			name: 'Outline',
			description: 'Whether the button should be outlined.',
			table: {
				category: 'Appearance',
				defaultValue: { summary: false },
			},
			control: 'boolean',
			defaultValue: false,
		},
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const linkButtonArgs: LinkButtonProps = {
	...mockButtonProps.primary,
};

export const LinkButton: Story = {
	args: linkButtonArgs,
};

const buttonButtonArgs: ButtonButtonProps = {
	...mockButtonProps.buttonButton,
};

export const ButtonButton: Story = {
	args: buttonButtonArgs,
};
