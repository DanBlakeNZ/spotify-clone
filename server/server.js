require("dotenv").config();
const express = require("express");
const querystring = require("querystring");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const request = require("request");

const app = express();
const port = process.env.PORT || 3000;
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = "http://localhost:3000/callback";

const generateRandomString = function(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = "spotify_auth_state";

app.use(cors(), cookieParser());

app.get("/login", function(req, res) {
  let state = generateRandomString(16);
  let scope = "user-read-private user-read-email";

  res.cookie(stateKey, state);

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      })
  );
});

app.get("/callback", function(req, res) {
  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    console.log("State mismatch");
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code"
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer.from(client_id + ":" + client_secret).toString("base64")
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token,
          refresh_token = body.refresh_token,
          expires_in = body.expires_in;

        res.cookie("accessToken", access_token, {
          maxAge: expires_in
        });
        res.cookie("refreshToken", refresh_token);

        res.redirect("http://localhost:8080");
      } else {
        console.log(error);
      }
    });
  }
});

app.get("/refresh_token", function(req, res) {
  let refresh_token = req.query.refreshToken;
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer.from(client_id + ":" + client_secret).toString("base64")
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      let access_token = body.access_token;
      res.send({
        access_token: access_token
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
