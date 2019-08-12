const CLIEngine = require('eslint').CLIEngine;

describe('eslint-config-twilio', () => {
  it('lints correctly', () => {
    const eslint = new CLIEngine({
      configFile: 'src/index.js',
    });
    const report = eslint.executeOnFiles(['test/code']);

    expect(report.results.length).toBeGreaterThan(0);
    expect(report.errorCount).toBe(1);
  });
})
