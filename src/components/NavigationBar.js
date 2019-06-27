import React, { Component } from "react";
import styled from "styled-components";
import styleVariables from "../styles/styleVariables";
import SVG from "react-inlinesvg";

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
  padding-bottom: 18px;
`;

const LogoWrapper = styled.div`
  width: 131px;
  height: 40px;
  color: #ffffff;
`;

class NavigationBar extends Component {
  render() {
    return (
      <NavBarWrapper>
        <NavBar>
          <LogoContainer>
            <LogoWrapper>
              <SVG src={"../images/spotify_text_logo.svg"} />
            </LogoWrapper>
          </LogoContainer>
          Home
        </NavBar>
      </NavBarWrapper>
    );
  }
}

export default NavigationBar;
