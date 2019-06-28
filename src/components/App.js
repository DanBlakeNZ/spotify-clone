import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import * as SpotifyFunctions from "../helpers/spotifyFunctions.js";
import Login from "./Login";
import Spotify from "./Spotify.js";
import CircularBook400 from "../fonts/Circular-Book-400.woff2";
import CircularBold700 from "../fonts/Circular-Bold-700.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'CircularBook400';
    src: url('./dist/${CircularBook400}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'CircularBold700';
    src: url('./dist/${CircularBold700}') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    vertical-align: baseline;
    font-smooth: antialiased;
  }

   html {
    background-color: #181818;
    height: 100%;
    scrollbar-color: hsla(0,0%,100%,.3) transparent;
    scrollbar-width: auto
  }

  body,button,input {
    font-family: 'CircularBook400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: .015em;
    color: #b3b3b3;
    text-transform: none
  }

  body {
    min-width: 720px;
    display: flex;
    overscroll-behavior-y: none;
    height: 100%;
  }

  a {
    color: #fff;
    border-bottom: 1px solid transparent;
  }

  a,a:focus,a:hover {
      text-decoration: none;
  }

  a:focus,a:hover {
      border-bottom-color: currentcolor;
  }

  ul, ol{
    list-style: none;
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
