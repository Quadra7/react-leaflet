const path = require("path");

module.exports = {
  webpack: {
    alias: {
      mapsData: path.resolve(__dirname, "src/assets/data"),
      geojson: path.resolve(__dirname, "src/assets/geojson"),
      pictures: path.resolve(__dirname, "src/assets/pictures"),
      commonComponents: path.resolve(__dirname, "src/components"),
    },
  },
};