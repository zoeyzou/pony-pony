module.exports = {
  rootDir: './src',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/components$1',
    '^containers(.*)$': '<rootDir>/containers$1',
    '^stores(.*)$': '<rootDir>/stores$1',
    '^styled-components(.*)$': '<rootDir>/styled-component$1',
    '^types(.*)$': '<rootDir>/types',
    '^utils(.*)$': '<rootDir>/utils',
  },
  setupFilesAfterEnv: ['./src/setupTests.ts'],
}
