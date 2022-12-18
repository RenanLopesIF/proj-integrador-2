module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:import/recommended', 'eslint-config-prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'import/named': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'no-constant-binary-expression': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-imports': 'error',
    'no-use-before-define': 'error',
    camelcase: 'warn',
    'react/jsx-key': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
