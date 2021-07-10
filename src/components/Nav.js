import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import navigationData from "../data/navigationData";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "./ui/UIComponents";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const hideNav = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", hideNav);
    return () => {
      window.removeEventListener("resize", hideNav);
    };
  }, []);

  return (
    <Container>
      <StyledIconButton onClick={() => setOpen(!open)} $rotate={open}>
        <MenuIcon />
      </StyledIconButton>
      <List open={open}>
        {navigationData.map((item) => (
          <ListItem key={item.id}>
            <StyledLink
              exact
              to={item.url}
              onClick={() => {
                setOpen(false);
              }}
              activeClassName='active'
            >
              {item.name}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Nav;

const Container = styled.nav`
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledIconButton = styled(IconButton)`
  @media (min-width: 800px) {
    display: none;
  }
`;

const List = styled.ul`
  background: ${(props) => props.theme.nav.bg};
  list-style-type: none;
  padding: 0;
  border-radius: 0 0 8px 8px;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.nav.shadow};
  transition: max-height 0.3s ease-in-out;
  max-height: ${(props) =>
    props.open ? `${navigationData.length * 60}px` : "0"};

  @media (min-width: 800px) {
    position: static;
    display: flex;
    max-height: 60px;
    border-radius: 0;
    box-shadow: none;
  }
`;
const ListItem = styled.li`
  flex: 1;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  display: block;
  height: 60px;
  font-weight: 500;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: font-size 0.15s ease-in-out;
  &.active,
  :hover,
  :focus {
    outline: none;
    background-color: ${(props) => props.theme.nav.hoverBg};
    color: #009dff;
    font-size: ${(props) => props.theme.fonts.md};
  }

  @media (min-width: 800px) {
    position: relative;
    ::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 100%;
      height: 2px;
      background: red;
      transition: right 0.15s ease-in-out;
    }
    &.active,
    :hover,
    :focus {
      background-color: transparent;
      color: ${(props) => props.theme.nav.hoverColor};
      ::before {
        right: 0%;
        background: #009dff;
      }
    }
  }
`;
