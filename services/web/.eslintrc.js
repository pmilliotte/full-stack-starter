module.exports = {
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/no-danger': 'error',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/accessible-emoji': 'off',
    'risxss/catch-potential-xss-react': 'error',
    'react/jsx-curly-brace-presence': 'error',
  },
  env: { browser: true, es2020: true },
  extends: [
    // 'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react-hooks', 'jsx-a11y', 'risxss'],
};
