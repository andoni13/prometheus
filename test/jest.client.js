const path = require('path');

module.exports = {
	...require('./jest.common'),
	displayName: 'client',
	rootDir: path.join(__dirname, '../src'),
	setupFilesAfterEnv: [
		'@testing-library/jest-dom/extend-expect',
		'jest-axe/extend-expect',
	],
	testEnvironment: 'jest-environment-jsdom',
};
