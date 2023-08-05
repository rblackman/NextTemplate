import type { Meta, StoryObj } from '@storybook/react';
import LinkTemplate, { LinkTemplateProps } from './linkTemplate';
import mockLinkTemplateProps from './linkTemplate.mocks';

const meta = {
	title: 'templates/LinkTemplate',
	component: LinkTemplate,
	argTypes: {},
} satisfies Meta<typeof LinkTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

const primaryArgs: LinkTemplateProps = {
	...mockLinkTemplateProps.primary,
};

export const Primary: Story = {
	args: primaryArgs,
};
