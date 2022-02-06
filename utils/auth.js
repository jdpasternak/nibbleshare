const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    // [x] TODO change to /login
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
