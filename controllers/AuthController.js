const { validationResult } = require('express-validator');
let userModel = require('../models/User');

exports.login = (req, res) => {
  res.render('auth/login', { layout: 'auth' });
}

exports.register = (req, res) => {
  res.render('auth/register', {
    layout: 'auth',
    errors: req.flash('errors')
  });
}

exports.store = (req, res) => {
  // Identifica si hubieron errores en el request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.flash('errors', errors.array());
    return res.redirect('back');
  }
  userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password })
    .then((data) => {
      return res.send('Usuario registrado con éxito');
    })
    .catch((error) => console.log(error));
}

