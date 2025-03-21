import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import importPlugin from "eslint-plugin-import"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import tsParser from "@typescript-eslint/parser"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const ignorePatterns = [
  "**/node_modules/**",
  "**/dist/**",
  "**/build/**",
  "**/coverage/**",
  "**/__tests__/**",
  "**/__mocks__/**",
  "**/__fixtures__/**",
  "**/__generated__/**",
  "**/__generated_next__/**",
  "src/lib/ui/**",
]

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
  ),
  {
    ignores: ignorePatterns,
  },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
    },
  },
  {
    rules: {
      eqeqeq: "error",
      "eol-last": "error",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "react/jsx-pascal-case": "error",
      "react/jsx-boolean-value": "error",
      "react/self-closing-comp": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "always", children: "ignore" },
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      // TODO: 将来的にonにしたい
      // "react/jsx-handler-names": [
      //   "error",
      //   {
      //     eventHandlerPrefix: "handle",
      //     eventHandlerPropPrefix: "on",
      //     checkInlineFunction: true,
      //     checkLocalVariables: true,
      //   },
      // ],
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    plugins: {
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "object",
            "type",
            "index",
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "~/**",
              group: "internal",
              position: "before",
            },
          ],
        },
      ],
    },
  },
]

export default eslintConfig
