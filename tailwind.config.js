const { Container } = require("postcss");

module.exports = {
  content: [
    './src/**/*.html',
    './index.html',
    './index2.html',
  ],
  theme: {
    extend: {
      container: { // Utilise "container" ici sans majuscule
        center: true, // Centre automatiquement le conteneur
        padding: '2rem', // Ajoute du padding à tous les côtés du conteneur
        screens: { // Définit des tailles de conteneurs pour différentes tailles d'écran
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}
