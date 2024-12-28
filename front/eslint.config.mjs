import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get the current file's path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for compatibility with ESLint's older configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define the ESLint configuration
const eslintConfig = [
  // Extend the recommended rules for Next.js and TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow the use of <img> elements without forcing <Image /> from Next.js
      "@next/next/no-img-element": "off",

      // Change unused variable errors to warnings
      "@typescript-eslint/no-unused-vars": "warn",

      // Relax the rules for missing dependencies in useEffect
      "react-hooks/exhaustive-deps": "warn",

      // Allow unescaped entities like ' in JSX
      "react/no-unescaped-entities": "off",

      // Allow console statements without warnings
      "no-console": "off",

      // Change unused variables (non-TypeScript) to warnings
      "no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;
