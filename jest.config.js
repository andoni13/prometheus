module.exports = {
	collectCoverageFrom: ['**/src/**/*.+(js|jsx|ts|tsx)'],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	projects: ['./test/jest.lint.js', './test/jest.client.js'],
	watchPlugins: [
		'jest-watch-select-projects',
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname',
	],
};
