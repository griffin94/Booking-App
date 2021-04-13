import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";

const NavBar = ({ searchHandler }) => {
  return (
    <Container>
      <ThemeButton />
      <SearchBarWrapper>
        <SearchBar searchHandler={searchHandler} />
      </SearchBarWrapper>
      <NavWrapper>
        <Nav />
      </NavWrapper>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  background: ${(props) => props.theme.nav.bg};
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: ${(props) => props.theme.nav.shadow};
`;
const SearchBarWrapper = styled.div`
  min-width: 0;
  padding: 0 5px;
  @media (min-width: 800px) {
    flex: 1 1 40%;
    padding: 0 10px;
  }
`;
const NavWrapper = styled.div`
  @media (min-width: 800px) {
    flex: 1 1 60%;
    max-width: 800px;
  }
`;
