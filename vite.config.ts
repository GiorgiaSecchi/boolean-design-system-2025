import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

//! Da video-lezione per impostare Vitest
// // Questa riga sotto importa i tipi di Vitest per abilitare il supporto a IntelliSense e TypeScript.
// /// <reference types="vitest/config" />

// import { defineConfig } from "vitest/config";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: "jsdom",
//     setupFiles: "./src/setupTests.ts",
//     include: ["src/**/*.test.{js,ts,tsx}"],
//   },
// });
