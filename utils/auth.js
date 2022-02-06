const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    // [ ] TODO change to /login
    res.redirect("/");
  } else {
    next();
  }
};

module.exports = withAuth;
