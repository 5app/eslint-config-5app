import dogfooding from './index.js';
import globals from 'globals';

export default [
	...dogfooding,
	{
		files: ['test/**/*.js'],
		languageOptions: {
			globals: {
				...globals.mocha,
				Dare: 'readonly',
			}
		},
		rules: {
			'quote-props': 0
		}
	}
];
