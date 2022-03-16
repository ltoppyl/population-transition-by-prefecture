module.export = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "react-app",
    "react-app/jest",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".tsx"],
      },
    },
  },
  plugins: ["react", "@typescript-eslint", "import"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "prettier/prettier": [2, { singleQuote: true, semi: true }],
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "import/no-named-as-default-member": 0,
    "no-console": "warn",
    "no-undef": "off",
    "import/order": [
      2,
      {
        alphabetize: { order: "asc" },
        "newlines-between": "always",
      },
    ],
  },
};
