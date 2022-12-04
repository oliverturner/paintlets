const OpenProps = require("open-props");
const postcssJitProps = require("postcss-jit-props");
const postcssPresetEnv = require("postcss-preset-env");

const { customMedia, customProperties } = require("./src/theme.cjs");

console.log({ customMedia, customProperties });

module.exports = {
  plugins: [
    postcssJitProps({
      ...OpenProps,
      ...customProperties,
    }),
    postcssPresetEnv({
      features: {
        "nesting-rules": true,
        "custom-media-queries": { importFrom: [{ customMedia }] },
      },
    }),
  ],
};
