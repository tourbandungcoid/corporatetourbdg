import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Content-heavy site: unescaped quotes/apostrophes in JSX are harmless
      "react/no-unescaped-entities": "off",
      // Legitimate any usage for third-party globals (window.gtag, dataLayer)
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
