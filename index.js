//Common-JS modules vs ES2015 modules
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

// To indicate passport to use Google Oauth.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile);
    }
  )
);

app.get("/auth/google/callback", passport.authenticate("google"));

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// For dynamic port binding or 5000 by default.
const PORT = process.env.PORT || 5000;
// Instructs NODE to listen for incomming traffic on port 5000.
app.listen(PORT);
