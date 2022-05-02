module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:@typesscript-eslint/recommended",
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    // 'plugin:import/typescript',
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    sourceType: "module",
  },
  plugins: [
    "eslint-plugin-prefer-arrow",
    "eslint-plugin-prettier",
    "eslint-plugin-react",
    "eslint-plugin-babel",
    "sort-imports-es6-autofix",
    "@typescript-eslint/eslint-plugin",
    "react-hooks",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/array-type": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "@typescript-eslint/no-explicit-any": "warn",
  },
};
