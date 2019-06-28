import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import "normalize.css";
import App from "./components/App";
import NotFound from "./components/NotFound";
import NavigationBar from "./components/NavigationBar";
import Login from "./components/Login";
import Spotify from "./components/Spotify";
import PrivateRoute from "./routes/PrivateRoute";
import CircularBook400 from "./fonts/Circular-Book-400.woff2";
import CircularBold700 from "./fonts/Circular-Bold-700.woff2";

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

const AppContainer = styled.div`
  position: absolute;
  left: 230px;
`;

const LoginContainer = () => (
  <div>
    <Route path="/login" component={Login} />
  </div>
);

const DefaultContainer = () => (
  <div>
    <NavigationBar />
    <AppContainer>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/browse" component={Spotify} />
    </AppContainer>
  </div>
);

const routing = (
  <Router>
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route component={DefaultContainer} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("app"));
