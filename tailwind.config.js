/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand Primary Colors (Blue)
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6", // Main primary color
          600: "#2563eb", // Hover state
          700: "#1d4ed8", // Active state
          800: "#1e40af",
          900: "#1e3a8a",
          DEFAULT: "#3b82f6", // Can use bg-primary instead of bg-primary-500
        },

        // Success Colors (Green)
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a", // Main success color
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          DEFAULT: "#16a34a",
        },

        // Warning Colors (Yellow)
        warning: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308", // Main warning color
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          DEFAULT: "#eab308",
        },

        // Error/Danger Colors (Red)
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626", // Main error color
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          DEFAULT: "#dc2626",
        },
        danger: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          DEFAULT: "#dc2626",
        },

        // Info Colors (Sky Blue)
        info: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          DEFAULT: "#0ea5e9",
        },

        // Star Rating Colors
        star: {
          filled: "#facc15", // yellow-400
          empty: "#d1d5db", // gray-300 (light mode)
          "empty-dark": "#4b5563", // gray-600 (dark mode)
          hover: "#fde047", // yellow-300
        },

        // Theme Colors (Light/Dark mode specific)
        light: {
          bg: "#ffffff",
          "bg-secondary": "#f3f4f6",
          "bg-tertiary": "#f9fafb",
          text: "#111827",
          "text-secondary": "#6b7280",
          "text-tertiary": "#9ca3af",
          border: "#e5e7eb",
          "border-secondary": "#d1d5db",
        },
        dark: {
          bg: "#1f2937",
          "bg-secondary": "#111827",
          "bg-tertiary": "#0f172a",
          text: "#f9fafb",
          "text-secondary": "#d1d5db",
          "text-tertiary": "#9ca3af",
          border: "#374151",
          "border-secondary": "#4b5563",
        },
      },

      // Custom spacing (optional - extends Tailwind's default)
      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },

      // Custom border radius (optional)
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      // Custom box shadows (optional)
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-dark":
          "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
      },

      // Custom animations (optional)
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
