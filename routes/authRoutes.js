const passport = require("passport");

module.exports = app => {
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get('/api/logout', (req, res) => {
    // Passport appends logout method to the request object.
    req.logout();
    res.send(req.user);
  });
  // User is added automatically by passport
  // through the use of serialize and deserialize
  // user.
  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
};
