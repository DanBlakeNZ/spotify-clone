const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
const clientId = "410437905f1c4778b5e912f65cc0bfb5";
const redirect_uri = "http://localhost:3000";

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.get("/login", function(req, res) {
  var scopes = "user-read-private user-read-email";
  res.redirect(
    "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" +
      clientId +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent(redirect_uri)
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
