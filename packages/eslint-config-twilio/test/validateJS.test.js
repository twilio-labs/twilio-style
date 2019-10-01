const path = require('path');
const CLIEngine = require('eslint').CLIEngine;

describe('eslint-config-twilio', () => {
  it('lints correctly', () => {
    const eslint = new CLIEngine({
      configFile: path.join(__dirname, '../index.js'),
    });
    const report = eslint.executeOnFiles([
      path.join(__dirname, 'code')
    ]);
    
    expect(report.results.length).toBeGreaterThan(0);
    expect(report.errorCount).toBe(1);
  });
})
