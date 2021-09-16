module.exports = {
	collectCoverageFrom: ['**/*.+(js|jsx|ts|tsx)'],
	coverageThreshold: {
		global: {
			branches: 30,
			functions: 30,
			lines: 30,
			statements: 30,
		},
	},
	projects: ['./test/jest.lint.js', './test/jest.client.js'],
	watchPlugins: [
		'jest-watch-select-projects',
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname',
	],
};
