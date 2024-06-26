// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['import', 'unused-imports', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // react first, react-native second, then packages starting with a character
          ['^react$', '^react-native', '^[a-z]'],
          // Packages starting with @
          ['^@'],
          // Packages starting with ~
          ['^~'],
          // _ shortcuts
          ['^_'],
          // Imports starting with ../
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Imports starting with ./
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports
          ['^.+\\.s?css$'],
          // Side effect imports
          ['^\\u0000'],
        ],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
