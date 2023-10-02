import type { Config } from 'jest'

const config: Config = {
  preset: 'jest-expo',
  setupFiles: [
    '<rootDir>/src/@tests/setup.ts'
  ],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|@gluestack-ui/*|@gluestack-style/*|@legendapp/*|react-native-svg)'
  ]
}

export default config