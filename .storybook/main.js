const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
  ],
  "framework": "@storybook/react",
  webpackFinal: async function (config) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "@emotion/core": toPath("node_modules/@emotion/react"),
        "@emotion/styled": toPath("node_modules/@emotion/styled"),
        "emotion-theming": toPath("node_modules/@emotion/react")
      }
    };

    return config;
  }
}
