import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import _import from "eslint-plugin-import";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
  "eslint:recommended",
  "plugin:react/recommended",
  "plugin:react-hooks/recommended",
  "plugin:jsx-a11y/recommended",
  "plugin:import/errors",
  "plugin:import/warnings",
  "plugin:import/typescript",
  "plugin:@typescript-eslint/recommended",
)), {
  plugins: {
    react: fixupPluginRules(react),
    "react-hooks": fixupPluginRules(reactHooks),
    "jsx-a11y": fixupPluginRules(jsxA11Y),
    import: fixupPluginRules(_import),
    "@typescript-eslint": fixupPluginRules(typescriptEslint),
  },

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },

    parser: tsParser,
    ecmaVersion: 12,
    sourceType: "module",

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",

    "@typescript-eslint/no-unused-vars": ["warn", {
      argsIgnorePattern: "^_",
    }],

    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "off",
    "react/button-has-type": "off",
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "off",
    "no-alert": "off",
    "no-plusplus": "off",
    "no-use-before-define": "off",
    "no-noninteractive-element-to-interactive-role": "off",
    "no-prototype-builtins": "off",
    "no-unused-vars": "off",
    "no-nested-ternary": "off",
    "no-param-reassign": "off",
    "no-useless-escape": "off",
    "no-debugger": "off",

    "no-console": ["warn", {
      allow: ["warn", "error"],
    }],

    camelcase: "off",
    "consistent-return": "off",
    "func-names": "off",
    // "prettier/prettier": "error",
  },
}];