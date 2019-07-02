require("dotenv").config();
const express = require("express");
const app = express();
const querystring = require("querystring");

const port = process.env.PORT || 3000;
const client_id = process.env.CLIENT_ID;
const redirect_uri = "http://localhost:3000/callback";

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/login", function(req, res) {
  let scope = "user-read-private user-read-email";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri
      })
  );
});

app.get("/callback", function(req, res) {
  res.redirect(
    "http://localhost:8080/?" +
      querystring.stringify({
        access_token: req.query.code || null
      })
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
