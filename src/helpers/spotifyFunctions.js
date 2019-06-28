import Spotify from "spotify-web-api-js";
import secrets from "../../secrets";

const spotifyApi = new Spotify();

export function redirectUrlToSpotifyForLogin() {
  const { CLIENT_ID } = secrets, // Need to change to environment variables for production.
    REDIRECT_URI = "http://localhost:9000/browse", // Need to change to environment variables for production.
    scopes = [
      "user-modify-playback-state",
      "user-library-read",
      "user-library-modify",
      "playlist-read-private",
      "playlist-modify-public",
      "playlist-modify-private"
    ];
  return `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(scopes.join(" "))}&response_type=token`;
}

export function checkUrlForSpotifyAccessToken() {
  const params = getHashParams(),
    accessToken = params.access_token;
  if (!accessToken) {
    return false;
  }
  return accessToken;
}

function getHashParams() {
  // Helper function to parse the query string that spotify sends back when you log in
  let hashParams = {},
    e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  // eslint-disable-next-line
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

export function setAccessToken(accessToken) {
  spotifyApi.setAccessToken(accessToken);
}

export function getUserDetails() {
  return spotifyApi.getMe();
}
