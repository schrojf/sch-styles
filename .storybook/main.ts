import type {StorybookConfig} from "@storybook/html-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-storysource",
        "@storybook/addon-themes",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    framework: {
        name: "@storybook/html-vite",
        options: {},
    },
    docs: {},
};
export default config;
