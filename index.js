//Common-JS modules vs ES2015 modules
const express = require("express");
const app = express();

// Wait for http request with a GET Method.
// req => Javascript object that represent the request.
// res => Data to be sent back to the requester.
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// For dynamic port binding or 5000 by default.
const PORT = process.env.PORT || 5000;
// Instructs NODE to listen for incomming traffic on port 5000.
app.listen(PORT);
