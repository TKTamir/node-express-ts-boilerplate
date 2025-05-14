import eslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import nodePlugin from "eslint-plugin-node";

export default [
  prettierConfig,
  {
    ignores: ["dist", "node_modules"],
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: eslintParser,
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      "@typescript-eslint": eslintPlugin,
      node: nodePlugin,
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      "node/no-missing-import": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];
