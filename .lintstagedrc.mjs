import path from 'path';

const buildEslintCommand = (filenames) => [
	`next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`,
];

const config = {
	'**/*.(ts|tsx)': () => 'yarn tsc --noEmit',
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
	'**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
};

export default config;
