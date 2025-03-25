import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test", // Addon per i test
    "@storybook/addon-a11y", // Addon per l'accessibilità
    "@storybook/addon-themes", // Addon per la gestione dei temi
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
