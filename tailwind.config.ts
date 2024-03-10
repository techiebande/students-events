import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        gray950: "#0C111D",
        gray800: "#1D2939",
        gray500: "#667085",
        gray300: "#D0D5DD",
        primary600: "#E31B54",
        primary500: "#F63D68",
        companyBg:
          "linear-gradient(to right top, #fafbff, #f6f4fd, #f6ecf8, #f8e3ef, #fbdbe3)",
        seBg: "#F0F5FE",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        kycBg:
          "radial-gradient(circle, rgba(237,242,254,1) 0%, rgba(254,228,233,1) 40%, rgba(254,254,255,1) 99%)",
      },

      content: {
        stepicon: "/icons/Connector.svg",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      boxShadow: {
        icon: "0px 1.682px 1.345px 0px rgba(108, 73, 172, 0.02), 0px 4.042px 3.233px 0px rgba(108, 73, 172, 0.03), 0px 7.61px 6.088px 0px rgba(108, 73, 172, 0.04), 0px 13.575px 10.86px 0px rgba(108, 73, 172, 0.04), 0px 25.391px 20.313px 0px rgba(108, 73, 172, 0.05), 0px 60.777px 48.622px 0px rgba(108, 73, 172, 0.07)",
        stats:
          "0px 2.191px 1.753px 0px rgba(108, 73, 172, 0.02), 0px 5.265px 4.212px 0px rgba(108, 73, 172, 0.03), 0px 9.913px 7.93px 0px rgba(108, 73, 172, 0.04), 0px 17.683px 14.146px 0px rgba(108, 73, 172, 0.04)",
        cards:
          "0px 2.191px 1.753px 0px rgba(108, 73, 172, 0.02), 0px 5.265px 4.212px 0px rgba(108, 73, 172, 0.03), 0px 9.913px 7.93px 0px rgba(108, 73, 172, 0.04), 0px 17.683px 14.146px 0px rgba(108, 73, 172, 0.04)",
        searchItems: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        internship:
          "0px 2.191px 1.753px 0px rgba(108, 73, 172, 0.02), 0px 5.265px 4.212px 0px rgba(108, 73, 172, 0.03), 0px 9.913px 7.93px 0px rgba(108, 73, 172, 0.04), 0px 17.683px 14.146px 0px rgba(108, 73, 172, 0.04), 0px 33.074px 26.459px 0px rgba(108, 73, 172, 0.05), 0px 79.167px 63.333px 0px rgba(108, 73, 172, 0.07)",
      },
      dropShadow: {
        bcgShadow:
          "0px 2.191px 1.753px rgba(108, 73, 172, 0.02)) drop-shadow(0px 5.265px 4.212px rgba(108, 73, 172, 0.03)) drop-shadow(0px 9.913px 7.93px rgba(108, 73, 172, 0.04)) drop-shadow(0px 17.683px 14.146px rgba(108, 73, 172, 0.04)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      minHeight: {
        "main-content-height": "calc(100vh - 56.53px)",
      },
    },
    fontFamily: {
      filmotype: ["filmoType"],
      poppins: ["var(--font-poppins)"],
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
