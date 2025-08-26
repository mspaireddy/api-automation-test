/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  verbose: true,
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './reports',
      filename: 'report.html',
      expand: true
    }]
  ],
};
