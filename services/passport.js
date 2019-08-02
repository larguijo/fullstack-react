const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  // Using ID provided by mongo instead of
  // Google ID, this will allow to use any
  // authentication provider, like facebook or twitter.
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// To indicate passport to use Google Oauth.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // We'll search for user ID in mongo DB, if the 
      // user exists, the user is returned, if not it's created.
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //done(error, userRecord)
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id }).save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
