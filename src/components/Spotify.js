import React, { Component } from "react";
import PropTypes from "prop-types";
import * as SpotifyFunctions from "../helpers/spotifyFunctions.js";

class Spotify extends Component {
  componentDidMount() {
    SpotifyFunctions.setAccessToken(this.props.accessToken);
  }

  getMyDetails = () => {
    SpotifyFunctions.getUserDetails().then(
      data => {
        console.log("My Details", data);
      },
      err => {
        console.error(err);
      }
    );
  };

  render() {
    return (
      <div>
        <p>Spotify Dashboard</p>
        <button onClick={this.getMyDetails}>Get My Details</button>
      </div>
    );
  }
}

Spotify.propTypes = {
  accessToken: PropTypes.string
};

export default Spotify;
