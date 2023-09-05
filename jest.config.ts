import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	dir: './',
});

const config: Config = {
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'^@hooks/(.*)$': '<rootDir>/hooks/$1',
		'^@state/(.*)$': '<rootDir>/state/$1',
		'^@t/(.*)$': '<rootDir>/types/$1',
		'^@app/(.*)$': '<rootDir>/app/$1',
		'^@helpers/(.*)$': '<rootDir>/helpers/$1',
		'^@components/(.*)$': '<rootDir>/components/$1',
	},
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

const jestConfig = createJestConfig(config);
export default jestConfig;
