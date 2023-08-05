import type { Meta, StoryObj } from '@storybook/react';
import BaseTemplate, { LinkTemplateProps } from './link';
import { mockLinkProps } from './link.mocks';

const meta = {
	title: 'templates/LinkTemplate',
	component: BaseTemplate,
	argTypes: {},
} satisfies Meta<typeof BaseTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

const primaryArgs: LinkTemplateProps = {
	...mockLinkProps.primary,
};

export const Primary: Story = {
	args: primaryArgs,
};
