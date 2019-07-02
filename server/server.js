require("dotenv").config();
const express = require("express");
const session = require("express-session");
const querystring = require("querystring");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
const client_id = process.env.CLIENT_ID;
const redirect_uri = "http://localhost:3000/callback";

function secretGenerator() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

app.set("trust proxy", true);

app.use(
  cors(),
  session({
    secret: secretGenerator(),
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: null
    }
  })
);

app.get("/", function(req, res) {
  res.send("Hello");
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
  req.session.accessToken = req.query.code || null;
  res.redirect("http://localhost:3000/accesstoken");
});

app.get("/accesstoken", function(req, res) {
  console.log(req.session.accessToken);
  res.end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
