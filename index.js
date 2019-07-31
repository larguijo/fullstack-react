//Common-JS modules vs ES2015 modules
const express = require("express");
require("./services/passport");

const app = express();
require("./routes/authRoutes")(app);

// For dynamic port binding or 5000 by default.
const PORT = process.env.PORT || 5000;
// Instructs NODE to listen for incomming traffic on port 5000.
app.listen(PORT);
