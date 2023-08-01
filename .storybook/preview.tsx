import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import '../app/globals.css';

const customViewports = {
	...INITIAL_VIEWPORTS,
	pixel7Pro: {
		name: 'Pixel 7 Pro',
		styles: {
			width: ' 412px',
			height: ' 892px',
		},
	},
};

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		nextjs: {
			appDirectory: true,
		},
		viewport: { viewports: customViewports },
	},
};

export default preview;
