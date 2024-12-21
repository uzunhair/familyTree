import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        }
      }
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      importPlugin.flatConfigs.recommended,
      jsxA11y.flatConfigs.recommended,
      prettier
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",

      "@typescript-eslint/no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
      }],
      "quote-props": ["error", "as-needed"],
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
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "prettier/prettier": "error",
    },
    ignores: [
      "/src/wailsjs",
      "/src/wailsjs/**/*",
      "src/wailsjs/**/*",
      "./src/wailsjs/**/*",
      ".src/wailsjs/**/*",
      "@/wailsjs/**/*",
      "/wailsjs/**/*",
      "./wailsjs/**/*",
      ".wailsjs/**/*",
      "C/DEV/test/wails/frontend/src/widgets/**/*",
      "runtime.js",
    ],
  },
)
