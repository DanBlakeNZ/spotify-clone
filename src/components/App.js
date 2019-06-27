import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import * as SpotifyFunctions from "../helpers/spotifyFunctions.js";
import Login from "./Login";
import Spotify from "./Spotify.js";
import styleVariables from "../styles/styleVariables";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    vertical-align: baseline;
  }

   html {
    background-color: #181818;
    height: 100%;
    scrollbar-color: hsla(0,0%,100%,.3) transparent;
    scrollbar-width: auto
}

  body,button,input {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: .015em;
    font-weight: 400;
    color: #b3b3b3;
    text-transform: none
  }

  body {
    @import url('../fonts/Circular-Book-400.woff2');
    font-family: 'circular-book', sans-serif;
    min-width: 720px;
    display: flex;
    overscroll-behavior-y: none;
    height: 100%
  }

  a {
    color: #fff;
    border-bottom: 1px solid transparent
  }

  a,a:focus,a:hover {
      text-decoration: none
  }

  a:focus,a:hover {
      border-bottom-color: currentcolor
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
