module.exports = {
  tabWidth: 2,
  semi: true,
  printWidth: 140,
  importOrder: ["^ui/(.*)$", "<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
      plugins: [require("@trivago/prettier-plugin-sort-imports"), require("prettier-plugin-tailwindcss")],
    "pluginSearchDirs": false
};
