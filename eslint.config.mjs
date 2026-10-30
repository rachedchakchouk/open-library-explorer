import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    // Nouvelle règle de eslint-plugin-react-hooks 7 (eslint-config-next 16) : signalée en avertissement
    // pour ne pas réécrire la logique de recherche existante dans cette mise à jour de dépendances.
    rules: { "react-hooks/set-state-in-effect": "warn" },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
