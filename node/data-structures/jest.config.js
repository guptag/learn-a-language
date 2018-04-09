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
    '!src/**/*.spec.{ts,js}',
    '!src/**/*.d.ts',
  ],
  testPathIgnorePatterns: ["/node_modules/"],
  mapCoverage: true,
  "globals": {
    "ts-jest": {
      "skipBabel": true
    }
  }
};



