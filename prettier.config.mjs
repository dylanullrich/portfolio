/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
/* {
  "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  "pluginSearchDirs": false
} */
