import React, { Component } from "react";
import styled from "styled-components";
import styleVariables from "../styles/styleVariables";
import SpotifyLogo from "../images/spotify_text_logo.svg";
import HomeIcon from "../images/icon_home.svg";
import SearchIcon from "../images/icon_search.svg";
import LibraryIcon from "../images/icon_library.svg";

const NavBarWrapper = styled.div`
  background: ${styleVariables.spotifyBlack};
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  overflow-y: auto;
  width: 230px;
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

const NavBarItem = styled.li`
  position: relative;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.015em;
`;

const NavBarLink = styled.a`
  color: ${styleVariables.spotifyGrey};
  border: 0;
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  transition-property: color;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  cursor: pointer;

  :hover {
    color: #ffffff;
  }

  :after {
    content: "";
    display: block;
    position: absolute;
    top: 5px;
    left: 0;
    bottom: 5px;
    width: 4px;
    background-color: #1ed760;
  }
`;

const NavBarLinkItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavBarLinkText = styled.span`
  margin-left: 16px;
  flex: 1;
  min-width: 0;
`;

class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      location: "Home"
    };
  }

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
            <NavBarItem>
              <NavBarLink>
                <NavBarLinkItems>
                  <HomeIcon width={24} height={24} />
                  <NavBarLinkText>Home</NavBarLinkText>
                </NavBarLinkItems>
              </NavBarLink>
            </NavBarItem>

            <NavBarItem>
              <NavBarLink>
                <NavBarLinkItems>
                  <SearchIcon width={24} height={24} />
                  <NavBarLinkText>Search</NavBarLinkText>
                </NavBarLinkItems>
              </NavBarLink>
            </NavBarItem>

            <NavBarItem>
              <NavBarLink>
                <NavBarLinkItems>
                  <LibraryIcon width={24} height={24} />
                  <NavBarLinkText>Your Library</NavBarLinkText>
                </NavBarLinkItems>
              </NavBarLink>
            </NavBarItem>
          </ul>
        </NavBar>
      </NavBarWrapper>
    );
  }
}

export default NavigationBar;
