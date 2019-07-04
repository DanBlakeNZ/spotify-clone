require("dotenv").config();
const express = require("express");
const querystring = require("querystring");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 3000;
const client_id = process.env.CLIENT_ID;
const redirect_uri = "http://localhost:3000/callback";

app.use(cors(), cookieParser());

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
  res.cookie("accessToken", req.query.code || null);
  res.redirect("http://localhost:8080");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
