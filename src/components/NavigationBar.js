import React, { Component } from "react";
import styled from "styled-components";
import NavBarItem from "./NavBarItem";
import styleVariables from "../styles/styleVariables";
import SpotifyLogo from "../images/spotify_text_logo.svg";

const NavBarWrapper = styled.div`
  position: absolute;
  background: ${styleVariables.spotifyBlack};
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  margin: 0;
  width: 230px;
  min-height: 100%;
`;

const NavBar = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  padding-top: 24px;
`;

const LogoContainer = styled.div`
  padding-left: 24px;
  padding-bottom: 23px;
`;

const LogoWrapper = styled.div`
  width: 131px;
  height: 40px;
  color: #ffffff;
`;

const NavBarItems = [{ name: "Home" }, { name: "Search" }, { name: "Library" }];

class NavigationBar extends Component {
  render() {
    return (
      <NavBarWrapper>
        <NavBar>
          <LogoContainer>
            <LogoWrapper>
              <SpotifyLogo width={131} height={40} />
            </LogoWrapper>
          </LogoContainer>
          <ul>
            {NavBarItems.map(item => (
              <NavBarItem name={item.name} icon={item.icon} key={item.name} />
            ))}
          </ul>
        </NavBar>
      </NavBarWrapper>
    );
  }
}

export default NavigationBar;
