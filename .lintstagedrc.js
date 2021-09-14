module.exports = {
	'**/*.+(js|jsx|ts|tsx|json|html|md)': [
		'prettier',
		'jest --findRelatedTests',
	],
};
