/* eslint-env mocha */
import {ESLint} from 'eslint';
import assert from 'node:assert/strict';


describe('Validate ESLint config', () => {
	it('load config in eslint to validate all rule syntax is correct', async () => {

		const cli = new ESLint({
			overrideConfigFile: 'index.js'
		});

		const text = `
const foo = 1;
function bar() {}
bar(foo);
`;
		const [{errorCount}] = await cli.lintText(text);
		assert.strictEqual(errorCount, 0);
	});
});
