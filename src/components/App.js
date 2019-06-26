import React, { Component } from "react";
import * as SpotifyFunctions from "../helpers/spotifyFunctions.js";
import Login from "./Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInToSpotify: false,
      accessToken: null
    };
  }

  componentDidMount() {
    const accessToken = SpotifyFunctions.checkUrlForSpotifyAccessToken();
    accessToken
      ? this.setState({ loggedInToSpotify: true, accessToken: accessToken })
      : this.setState({ loggedInToSpotify: false, accessToken: null });
  }

  render() {
    return (
      <div>
        <p>I'm the dashboard</p>
        {!this.state.loggedInToSpotify ? <Login /> : "Logged in"}
      </div>
    );
  }
}

export default App;
