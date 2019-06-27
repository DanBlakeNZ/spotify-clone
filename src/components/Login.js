import React from "react";
import * as SpotifyFunctions from "../helpers/spotifyFunctions.js";

const Login = () => {
  return (
    <div>
      <a href={SpotifyFunctions.redirectUrlToSpotifyForLogin()}>
        <button>Connect to Spotify</button>
      </a>
    </div>
  );
};

export default Login;
