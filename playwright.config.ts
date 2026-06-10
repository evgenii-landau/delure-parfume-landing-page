import { defineConfig } from "@playwright/test"

// Run the dev server first (npm run dev), then: npx playwright test
// Override the target with BASE_URL=http://localhost:3001 npx playwright test
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
    screenshot: "only-on-failure",
  },
})
