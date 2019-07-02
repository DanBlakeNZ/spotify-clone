require("dotenv").config();
const express = require("express");
const session = require("express-session");
const querystring = require("querystring");

const port = process.env.PORT || 3000;
const client_id = process.env.CLIENT_ID;
const redirect_uri = "http://localhost:3000/callback";

const app = express();

function generateSecret() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

function getAccessToken(req) {
  return req.session.access_token;
}

app.use(
  session({
    secret: generateSecret(),
    saveUninitialized: true,
    resave: true
  })
);

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
  req.session.access_token = req.query.code;
  res.redirect("http://localhost:8080");
});

app.get("/accesstoken", function(req, res) {
  let accessToken = getAccessToken(req);
  res.send(accessToken ? accessToken : "No Token");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
