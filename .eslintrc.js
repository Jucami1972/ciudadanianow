module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        bracketSpacing: false,
        jsxBracketSameLine: true,
      },
    ],
    'no-trailing-spaces': 'warn',
    'react-native/no-inline-styles': 'warn',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
