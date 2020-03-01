// Importamos express-validators para ayudarnos a implementar las reglas
// de validación
const { check } = require('express-validator');

// Escribimos las reglas de validación para la acción register
exports.store = [
  // Revisa que el nombre no sea vacío
  check('name').notEmpty()
];
