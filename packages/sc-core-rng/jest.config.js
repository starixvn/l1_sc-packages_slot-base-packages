/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    extensionsToTreatAsEsm: [".ts"],
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    transform: {
        "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
    },
    testPathIgnorePatterns: ["/node_modules/", "/lib/"],
    coverageDirectory: "reports/coverage",
    coverageReporters: ["text", "html", "cobertura", "clover", "lcov"],
    reporters: [
        "default",
        [
            "jest-junit",
            {
                outputDirectory: "reports",
                outputName: "test-reporter.xml",
            },
        ],
    ],
    testResultsProcessor: "jest-sonar-reporter",
};
