import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
	stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	// stories: ['../components/**/*.mdx', '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	staticDirs: ['../public'],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config) => {
		if (config?.resolve?.alias) {
			config.resolve.alias = {
				...config.resolve.alias,
				'@': path.resolve(__dirname, "../"),
				'@hooks': path.resolve(__dirname, "../hooks/"),
				'@state': path.resolve(__dirname, "../state/"),
				'@t': path.resolve(__dirname, "../types/"),
				'@app': path.resolve(__dirname, "../app/"),
				'@helpers': path.resolve(__dirname, "../helpers/"),
				'@components': path.resolve(__dirname, "../components/"),
			};
		}
		return config;
	}
};

export default config;
