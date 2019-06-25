import React, { Component } from "react";

const clientId = "410437905f1c4778b5e912f65cc0bfb5";
const redirectUri = "http://localhost:9000/dashboard";
const scopes = ["user-read-currently-playing", "user-read-playback-state"];
const url =
  "https://accounts.spotify.com/authorize" +
  "?response_type=code" +
  "&client_id=" +
  clientId +
  (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
  "&redirect_uri=" +
  encodeURIComponent(redirectUri);

class Login extends Component {
  render() {
    return (
      <div>
        <a href={url}>Login to Spotify</a>
      </div>
    );
  }
}

export default Login;
