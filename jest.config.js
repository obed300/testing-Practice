module.exports = {
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    setupFiles: [],
    testMatch: ['<rootDir>/src/**/*.test.js'],
};

  