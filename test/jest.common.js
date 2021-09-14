const path = require('path');

module.exports = {
	moduleDirectories: [
		'node_modules',
		path.join(__dirname, 'src'),
		'shared',
		path.join(__dirname, 'test'),
	],
	moduleNameMapper: {
		'\\.module\\.styl$': 'identity-obj-proxy',
		'\\.css$': require.resolve('./style-mock.js'),
	},
};
