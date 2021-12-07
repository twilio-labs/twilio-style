const path = require('path');
const CLIEngine = require('eslint').ESLint;

describe('eslint-config-twilio-react', () => {
  it('lints correctly', async () => {
    const eslint = new CLIEngine({
      overrideConfigFile: path.join(__dirname, '../index.js'),
      extensions: [ 'jsx' ],
    });
    const report = await eslint.lintFiles([
      path.join(__dirname, 'code')
    ]);

    expect(report.length).toBeGreaterThan(0);
    expect(report[0].errorCount).toBeGreaterThan(0);
  });
});
