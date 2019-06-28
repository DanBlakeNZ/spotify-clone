import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as SpotifyFunctions from "../helpers/spotifyFunctions.js";

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
    console.log(accessToken);
    accessToken
      ? this.setState({ loggedInToSpotify: true, accessToken })
      : this.setState({ loggedInToSpotify: false, accessToken: null });
  }

  render() {
    return (
      <div>
        {!this.state.loggedInToSpotify ? (
          <Redirect to={{ pathname: "/login" }} />
        ) : (
          <Redirect
            to={{
              pathname: "/browse",
              state: { accessToken: this.state.accessToken }
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
