module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleNameMapper: {
      // Handle module aliases
      '^@/queries/(.*)$': '<rootDir>/src/queries/$1',
      '^@/components/(.*)$': '<rootDir>/src/components/$1',
      '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
      '^@/services/(.*)$': '<rootDir>/src/services/$1',

      // For image
      '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/src/__mocks__/next/image.tsx`,
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
      // Use babel-jest to transpile tests with the next/babel preset
      // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleDirectories: ['node_modules', 'src']
};