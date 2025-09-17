module.exports = {
  theme: {
    extend: {
      keyframes: {
        entrada: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        entrada: 'entrada 0.7s ease-in-out',
      },
    },
  },
  plugins: [],
}