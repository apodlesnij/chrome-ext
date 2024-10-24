module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'import',
    'simple-import-sort',
    'no-relative-import-paths',
    'jsx-no-leaked-values',
    'perfectionist',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.ts', '.tsx'], paths: [`${__dirname}/src`] },
      alias: {
        map: [['src', `./src`]],
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': ['off'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
