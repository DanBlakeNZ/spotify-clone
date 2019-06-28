import React, { Component } from "react";
import styled from "styled-components";
import styleVariables from "../styles/styleVariables";

import HomeIcon from "../images/icon_home.svg";
import SearchIcon from "../images/icon_search.svg";
import LibraryIcon from "../images/icon_library.svg";

const NavBarItemContainer = styled.li`
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

const setIcon = name =>
  name === "Home" ? (
    <HomeIcon width={24} height={24} />
  ) : name === "Search" ? (
    <SearchIcon width={24} height={24} />
  ) : (
    <LibraryIcon width={24} height={24} />
  );

const NavBarItem = ({ name, icon }) => (
  <NavBarItemContainer>
    <NavBarLink>
      <NavBarLinkItems>
        {setIcon(name)}
        <NavBarLinkText>{name}</NavBarLinkText>
      </NavBarLinkItems>
    </NavBarLink>
  </NavBarItemContainer>
);

export default NavBarItem;
