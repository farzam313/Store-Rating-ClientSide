/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Custom theme colors
        light: {
          bg: "#ffffff",
          "bg-secondary": "#f3f4f6",
          text: "#111827",
          "text-secondary": "#6b7280",
          border: "#e5e7eb",
        },
        dark: {
          bg: "#1f2937",
          "bg-secondary": "#111827",
          text: "#f9fafb",
          "text-secondary": "#d1d5db",
          border: "#374151",
        },
      },
    },
  },
  plugins: [],
};
