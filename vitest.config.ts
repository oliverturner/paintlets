import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  test: {
    globals: true,
    // environment: 'browser',
    // setupFiles: './vitest.setup.ts',
    // plugins: [playwright()],
  },
});
