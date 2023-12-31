import type { Meta, StoryObj } from '@storybook/react';
import ButtonTemplate, { ButtonTemplateProps } from './buttonTemplate';
import mockButtonTemplateProps from './buttonTemplate.mocks';

const meta = {
	title: 'templates/Button',
	component: ButtonTemplate,
	argTypes: {
		children: {
			name: 'Contents',
			description: 'The text to display on the button.',
			table: {
				category: 'Content',
			},
		},
		href: {
			name: 'href',
			description: 'The link to navigate to',
			table: { category: 'Content' },
			if: { arg: 'href', exists: true },
		},

		variant: {
			name: 'Variant',
			description: 'The color variant of the button.',
			table: {
				category: 'Appearance',
				defaultValue: { summary: 'default' },
			},
			options: ['default', 'red', 'green', 'blue'],
			control: { type: 'radio' },
		},
		buttonType: {
			name: 'Button Type',
			description: 'The type of button. (<a href> or <button>)',
			table: {
				category: 'Control',
				defaultValue: { summary: 'button' },
			},
			if: { arg: 'buttonType', exists: true },
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
} satisfies Meta<typeof ButtonTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

const linkButtonArgs: ButtonTemplateProps = {
	...mockButtonTemplateProps.primary,
};

export const LinkButton: Story = {
	args: linkButtonArgs,
};

const buttonButtonArgs: ButtonTemplateProps = {
	...mockButtonTemplateProps.buttonButton,
};

export const ButtonButton: Story = {
	args: buttonButtonArgs,
};
