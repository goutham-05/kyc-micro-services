module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov', 'html', 'text', 'text-summary'],
    // collectCoverageFrom: [
    //     "src/**/*.{js,jsx,ts,tsx}",
    //     "!<rootDir>/node_modules/"
    // ],
    // coverageThreshold: {
    //     global: {
    //         statements: 20,
    //         branches: 20,
    //         functions: 20,
    //         lines: 20
    //     }
    // },
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.ts$': ['ts-jest', {
            tsconfig: 'tsconfig.jest.json',
        }],
    },
};
