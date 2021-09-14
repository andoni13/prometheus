const webpack = require('webpack');
const dotenv = require('dotenv').config({path: __dirname + '/.env'});
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';

const plugins = [
	new MiniCssExtractPlugin({
		filename: '[name].[contenthash].css',
	}),
	new HtmlWebpackPlugin({
		template: 'index.html',
	}),
	new webpack.DefinePlugin({
		'process.env': JSON.stringify(dotenv.parsed),
	}),
];

const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader;

module.exports = (env, argv) => {
	return {
		entry: {
			main: './src/index',
		},
		mode: argv.env,
		optimization: {
			minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
			splitChunks: {
				chunks: 'all',
			},
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
			modules: ['node_modules', path.join(__dirname, 'src'), 'shared'],
		},
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: 'file-loader',
						},
					],
				},
				{
					test: /\.(png|woff|woff2|eot|ttf|svg)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 8192,
							},
						},
					],
				},
				{
					test: /\.styl$/,
					use: [styleLoader, 'css-loader', 'stylus-loader'],
				},
			],
		},
		output: {
			filename: '[name].[fullhash].js',
			path: path.resolve(__dirname, 'dist/client'),
		},
		plugins,
		devServer: {
			// contentBase: path.join(__dirname, 'dist/client'),
			compress: true,
			port: 3001,
		},
	};
};
