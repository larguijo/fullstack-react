//Common-JS modules vs ES2015 modules
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const keys = require("./config/keys");
//Loading User model.
require("./models/User");
//Execute passport configuration on load, no return value is expected.
require("./services/passport");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

// Parses de request body and put it in req.body.
app.use(bodyParser.json());

// Configuration to use cookies, setting one month duration.
// and a key to encript it.
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

//Routes will be appended to app object.
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

//Allows to load static files, required for domain validation in google OAuth.
//app.use(express.static("public"));

// Since create-react-app doesn't exist in production.
// We have to instruct Node to let react router handle route it doesn't know
if (process.env.NODE_ENV === 'production') {
    //Express to serve up production assets.
    app.use(express.static('client/build'));
    //Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// For dynamic port binding or 5000 by default.
const PORT = process.env.PORT || 5000;
// Instructs NODE to listen for incomming traffic on port 5000.
app.listen(PORT);
