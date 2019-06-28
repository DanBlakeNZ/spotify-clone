import React from "react";
import { Redirect, Route } from "react-router-dom";
import { checkUrlForSpotifyAccessToken } from "../helpers/spotifyFunctions.js";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const accessToken = checkUrlForSpotifyAccessToken();

  return (
    <Route
      {...rest}
      render={props =>
        accessToken ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default PrivateRoute;
