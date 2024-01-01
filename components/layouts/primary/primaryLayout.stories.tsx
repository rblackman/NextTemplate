import type { Meta, StoryObj } from '@storybook/react';
import PrimaryLayout, { PrimaryLayoutProps } from './primaryLayout';
import mockPrimaryLayoutProps from './primaryLayout.mocks';

const meta = {
	title: 'layouts/Primary',
	component: PrimaryLayout,
	argTypes: {
		children: {
			name: 'Contents',
			description: 'The text contents of this layout.',
			table: {
				category: 'Content',
			},
		},
	},
} satisfies Meta<typeof PrimaryLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

const primaryLayoutArgs: PrimaryLayoutProps = {
	...mockPrimaryLayoutProps.primary,
};

export const Primary: Story = {
	args: primaryLayoutArgs,
};
