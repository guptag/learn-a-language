module.exports = {
  testEnvironment: 'node',
  /*transform: {
    '.(ts|tsx)': '<rootDir>/preprocessor.js'
  },*/
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
  ],
  testRegex: '(/^src/.*|(\\.|/)(test|spec))\\.(ts)x?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
  ],
  mapCoverage: true,
  "globals": {
    "ts-jest": {
      "skipBabel": true
    }
  }
};



