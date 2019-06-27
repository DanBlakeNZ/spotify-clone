import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import * as SpotifyFunctions from "../helpers/spotifyFunctions.js";
import Login from "./Login";
import Spotify from "./Spotify.js";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('../fonts/circular-book.otf');
    font-family: 'circular-book', sans-serif;
    font-weight: 400;
  }
`;

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
      ? this.setState({ loggedInToSpotify: true, accessToken })
      : this.setState({ loggedInToSpotify: false, accessToken: null });
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <p>Welcome to Spotify Clone</p>
        {!this.state.loggedInToSpotify ? (
          <Login />
        ) : (
          <Spotify accessToken={this.state.accessToken} />
        )}
      </div>
    );
  }
}

export default App;
