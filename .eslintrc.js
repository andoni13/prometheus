const path = require('path');

module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	rules: {
		strict: ['error', 'never'],
		'max-len': [
			'error',
			{
				code: 80,
				tabWidth: 2,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
				ignorePattern: ',^import\\s.+\\sfrom\\s.+;$',
			},
		],
		'no-unsafe-optional-chaining': 'error',
		'@typescript-eslint/no-var-requires': 0,
	},
	overrides: [
		{
			files: ['**/__tests__/**'],
			settings: {
				'import/resolver': {
					jest: {
						jestConfigFile: path.join(__dirname, './jest.config.js'),
					},
				},
			},
		},
		{
			files: '**/*.+(ts|tsx)',
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: './tsconfig.json',
			},
			plugins: ['@typescript-eslint'],
			extends: [
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',
			],
		},
	],
	env: {
		jest: true,
		browser: true,
		node: true,
	},
};
