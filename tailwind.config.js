/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      textColor: {
        Normal: {
          dark: `var(--text-dark)`,
          light: `var(--text-light)`,
        },
      },

      backgroundColor: {
        outerBg: {
          dark: `var(--bgouter-dark)`,
          light: `var(--bgouter-light)`,
        },
        innerBg: {
          dark: `var(--bginner-dark)`,
          light: `var(--bginner-light)`,
        },
      },

      boxShadow: {
        Normalshad: `var(--shad)`,
        hovershad: `var(--shadhover)`,
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

//   darkMode: "class",

//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
