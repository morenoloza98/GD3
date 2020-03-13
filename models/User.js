const knex = require('../database/connection');
const bcrypt = require('bcrypt')
/**
 * Encuentra al usuario que tenga el id indicado
 */


exports.find = (id) => {
  return knex
    .select('*')
    .from('users')
    .where('id', id)
    .first();
}

/**
 * Encuentra al usuario que tenga el correo indicado
 */
exports.findByEmail = (email) => {
  return knex
    .select('*')
    .from('users')
    .where('email', email)
    .first();
}

/**
 * Crea al usuario con los datos definidos dentro del objeto user
 */
exports.create = (user) => {
  // Obtiene la contraseña definida por el usuario
  let pass = user.password;
  // Encripta la contraseña
  pass = bcrypt.hashSync(pass, 10);
  return knex('users')
    .insert({ name: user.name, email: user.email, password: pass, role: user.role });
}

exports.all = () => {
  return knex
    .from('users')
    .select('*');
}

  exports.isAdmin = (req, res) => {
    findByEmail(req.email)
      .then((data) => {
        let user = data;
        return (user.role === 1);
      });
  }

  exports.isUser = (req, res) => {
    findByEmail(req.email)
      .then((data) => {
        let user = data;
        return (user.role === 2);
      });
  }

exports.getRedirectUrl = (role) => {
  switch (role) {
    case 1:
      return '/app/users'
    case 2:
      return '/app/dashboard'
    default:
      return '/'
  }
}
