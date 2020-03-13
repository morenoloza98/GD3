exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    // res.status(401).json({ msg: 'You are not authorized to view this resource' });
    res.redirect('/register');
  }
}

exports.isAdmin = (req, res, next) => {
  if(req.isAuthenticated() && req.user.role === 1){
    next();
  } else {
    res.status(403).json({msg: 'You do not have the right permissions to access this page'});
  }
}

exports.isUser = (req, res, next) => {
  if(req.isAuthenticated() && req.user.role === 2 || req.isAuthenticated() && req.user.role === 1){
    next();
  } else {
    res.status(403).json({msg: 'You do not have the right permissions to access this page'});
  }
}