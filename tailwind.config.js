

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          cardbg:'rgba(224, 189, 189, 1)',
          addMedBg:'rgba(217, 217, 217, 1)',
          addbtn:'rgba(19, 149, 73, 1)',
      },
    },
  },
  plugins: [  ],
}