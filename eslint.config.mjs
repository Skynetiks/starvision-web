import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";

const __filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default defineConfig([
  globalIgnores(["./src/migrations/*/.ts"]),
  [...compat.extends("next/core-web-vitals", "next/typescript")],
  { rules: { "@typescript-eslint/no-explicit-any": "off" } },
]);