// temporary workaround while we wait for https://github.com/facebook/jest/issues/9771
const enhancedResolve = require('enhanced-resolve');

const resolver = enhancedResolve.create.sync({
    conditionNames: ['require', 'node', 'default'],
    extensions: ['.js', '.json'],
    mainFields: ['exports', 'main', 'require'],
});

module.exports = (request, options) => {
    return resolver(options.basedir, request);
};
