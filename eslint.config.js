import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue", "**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
      rules: {
        "@typescript-eslint/no-inferrable-types": "off" // 禁用空 {} 报错
      }
    }
  },
];