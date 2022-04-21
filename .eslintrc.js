module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typesscript-eslint/recommended",
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended', 
        'prettier',
        'prettier/react'

    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typesscript-eslint", 'prettier'],
    rules: {
        "react-hooks/rules-of-hooks": ["error"],
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/array-type": "off",
        "prettier/prettier": "error",
        '@typescript-eslint/no-explicit-any': 'warn',

    }
}
