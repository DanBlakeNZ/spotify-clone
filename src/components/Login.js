import React, { Component } from "react";
import * as SpotifyFunctions from "../helpers/spotifyFunctions.js";

class Login extends Component {
  render() {
    return (
      <div>
        <a href={SpotifyFunctions.redirectUrlToSpotifyForLogin()}>
          <button>Connect to Spotify</button>
        </a>
      </div>
    );
  }
}

export default Login;
