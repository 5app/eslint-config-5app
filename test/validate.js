/* eslint-env mocha */
const {ESLint} = require('eslint');
const {expect} = require('chai');

it('load config in eslint to validate all rule syntax is correct', async () => {

	const cli = new ESLint({
		useEslintrc: false,
		overrideConfigFile: 'eslintrc.json'
	});

	const text = `
const foo = 1;
function bar() {}
bar(foo);
`;
	const [{errorCount}] = await cli.lintText(text);
	expect(errorCount).to.eql(0);
});
