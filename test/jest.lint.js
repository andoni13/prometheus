const path = require('path');

module.exports = {
	displayName: 'lint',
	rootDir: path.join(__dirname, '..'),
	runner: 'jest-runner-eslint',
	testMatch: ['<rootDir>/**/*.+(js|jsx|ts|tsx)'],
};
