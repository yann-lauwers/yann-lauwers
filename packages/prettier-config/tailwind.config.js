import sharedConfig from "tailwind-config/tailwind.config.js";

// Need tailwind in the prettier config so that it can sort the classNames correctly
module.exports = {
  presets: [sharedConfig],
};
