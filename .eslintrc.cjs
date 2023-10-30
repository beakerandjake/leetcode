module.exports = {
  env: {
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "no-console": "off",
    "no-restricted-syntax": "off",
    "no-plusplus": "off",
    "no-continue": "off",
    "no-unused-vars": "off",
    "no-bitwise": "off",
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': {
      'devDependencies': true
    }
  },
};
