import React, { Component } from "react";
import * as SpotifyFunctions from "../helpers/spotifyFunctions.js";

class Spotify extends Component {
  componentDidMount() {
    SpotifyFunctions.setAccessToken(this.props.accessToken);
  }

  getMyDetails = () => {
    SpotifyFunctions.getUserDetails().then(
      data => {
        console.log("Artist albums", data);
      },
      err => {
        console.error(err);
      }
    );
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <p>Spotify Dashboard</p>
        <button onClick={this.getMyDetails}>Get My Details</button>
      </div>
    );
  }
}

export default Spotify;
