// src/utils/slotImages.js
// Importamos *todas* las JPEG de la carpeta de un solo tiro
const modules = import.meta.glob('../assets/img/*.jpeg', { eager: true });

// modules es un objeto: { '../assets/img/1.jpeg': Module, '../assets/img/2.jpeg': Module, … }
// Lo convertimos en array de URLs
export const slotImages = Object
  .values(modules)      // [Module, Module, …]
  .map(m => m.default); // cada Module.default es la URL ya procesada por Vite
