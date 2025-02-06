/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/**/*.js", "./assets/css/**/*.css"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xs: "480px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
        padding: "12px",
      },
      colors: {
        background: {
          DEFAULT: "var(--background)",
          primaryBg: "var(--background)",
          secondaryBg: "var(--secondary-background)",
          dim: "var(--dim-background)",
          blurBg: "var(--blur-bg)",
          cardBg: "var(--card-bg)",
        },

        primary: {
          DEFAULT: "var(--primaryColor)",
        },

        secondary: {
          DEFAULT: "var(--secondaryColor)",
        },

        overlay: {
          DEFAULT: "var(--overlay)",
        },

        borderColor: {
          DEFAULT: "var(--borderColor)",
        },
      },
      fontFamily: {
        main: ['"Bai Jamjuree"', "sans-serif"],
        secondary: ['"Cabin"', "sans-serif"],
      },
      backgroundImage: {
        heroBg: "url('../images/bg/hero_bg.webp')",
        ctaBg: "url('../images/bg/cta.webp')",
        comingSoonBg: "url('../images/bg/comingSoon_bg.webp')",
      },
      keyframes: {
        slideFadeTwistEntrance: {
          "0%": {
            transform: "translateY(100vh) rotate(-30deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
          },
        },
        scroll: {
          " 0% ": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-250px * 7))",
          },
        },
        pulse: {
          "0%": {
            boxShadow: "0 0 0 5px rgba(255, 255, 255, 1)",
          },
          "50%": {
            opacity: "1",
          },
          "70%": {
            boxShadow: "0 0 0 15px rgba(255, 255, 255, 0)",
          },
          "100%": {
            boxShadow: "0 0 0 5px rgba(255, 255, 255, 0)",
          },
        },
        slideDown: {
          from: {
            transform: "translateY(-100%)",
          },
          to: {
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        slideFadeTwistEntrance:
          "slideFadeTwistEntrance 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
        scroll: "scroll 40s linear infinite",
        pulse: "pulse 2s infinite",
        slideDown: "slideDown 1s ease forwards",
      },
    },
  },
  plugins: [],
};
