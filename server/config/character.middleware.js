const characterlMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      ...req.body,
      sentence: '',
    };
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/character') {
    characterlMiddleware(req, res, next);
  } else {
    next();
  }
};
