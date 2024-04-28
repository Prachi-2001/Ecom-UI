const withMT = require("@material-tailwind/react/utils/withMT");

// Material Tailwind configuration
const materialTailwindConfig = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

// Tailwind CSS configuration
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        graphik: ["Graphik", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// Combine both configurations
const mergedConfig = {
  // Combine content arrays
  content: [...materialTailwindConfig.content, ...tailwindConfig.content],

  // Merge theme objects
  theme: {
    extend: {
      ...materialTailwindConfig.theme.extend,
      ...tailwindConfig.theme.extend,
    },
  },

  // Combine plugins arrays
  plugins: [...materialTailwindConfig.plugins, ...tailwindConfig.plugins],
};

// Export the merged configuration
module.exports = mergedConfig;
