const path = require('path');  // Añadir esta línea para importar el módulo 'path'
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Configura el alias '@' para que apunte a 'src'
config.resolver.alias = {
  '@': path.resolve(__dirname, 'src'),  // Usa 'path' para resolver correctamente la ruta
};

module.exports = withNativeWind(config, { input: './global.css' });
