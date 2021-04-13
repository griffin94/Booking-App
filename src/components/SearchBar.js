import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Input, IconButton } from "./ui/UIComponents";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ searchHandler }) => {
  const [term, setTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    searchHandler(term);
    setTerm("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        type='text'
        placeholder='Szukaj'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        ref={inputRef}
      />
      <IconButton desktopVisible={true}>
        <SearchIcon />
      </IconButton>
    </Form>
  );
};

export default SearchBar;

const Form = styled.form`
  display: flex;
`;
