import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/tests/setupTests.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["src/lib/ui/**"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/lib/ui/**"],
      reporter: ["text", "html", "json-summary", "json"],
      reportOnFailure: true,
      thresholds: {
        // TODO: 将来的には80にする
        statements: 60,
      },
    },
  },
})
