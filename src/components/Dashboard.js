import React, { Component } from "react";
import * as SpotifyFunctions from "../helpers/spotifyFunctions.js";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>Dashboard</p>
        {SpotifyFunctions.redirectUrlToSpotifyForLogin()
          ? "Logged in"
          : "Please login"}
      </div>
    );
  }
}

export default Dashboard;
