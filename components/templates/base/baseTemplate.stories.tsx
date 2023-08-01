import type { Meta, StoryObj } from '@storybook/react';
import BaseTemplate, { BaseTemplateProps } from './baseTemplate';
import { mockBaseTemplateProps } from './baseTemplate.mocks';

const meta = {
	title: 'templates/BaseTemplate',
	component: BaseTemplate,
	argTypes: {},
} satisfies Meta<typeof BaseTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

const primaryArgs: BaseTemplateProps = {
	...mockBaseTemplateProps.primary,
};

export const Primary: Story = {
	args: primaryArgs,
};
