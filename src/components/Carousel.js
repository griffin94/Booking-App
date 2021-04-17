import React, { useState } from "react";
import styled from "styled-components";
import KeyboardArrowLeftTwoToneIcon from "@material-ui/icons/KeyboardArrowLeftTwoTone";
import KeyboardArrowRightTwoToneIcon from "@material-ui/icons/KeyboardArrowRightTwoTone";
import { IconButton } from "./ui/UIComponents";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);
  const position = -(active * 100) / images.length;

  const moveRight = () => {
    active === images.length - 1 ? setActive(0) : setActive(active + 1);
  };

  const moveLeft = () => {
    active === 0 ? setActive(images.length - 1) : setActive(active - 1);
  };

  return (
    <Wrapper>
      <List images={images.length} translation={position}>
        {images.map((image) => (
          <ListItem key={image.id}>
            <Img src={image.url} />
          </ListItem>
        ))}
      </List>
      <LeftNav>
        <IconButton onClick={moveLeft}>
          <KeyboardArrowLeftTwoToneIcon
            style={{ fill: "#fff", fontSize: "60px" }}
          />
        </IconButton>
      </LeftNav>
      <RightNav>
        <IconButton onClick={moveRight}>
          <KeyboardArrowRightTwoToneIcon
            style={{ fill: "#fff", fontSize: "60px" }}
          />
        </IconButton>
      </RightNav>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  border-radius: 6px;
  overflow: hidden;
  position: relative;
`;
const List = styled.ul`
  list-style-type: none;
  width: ${(props) => `${props.images * 100}%`};
  display: flex;
  transition: transform 0.2s ease-in;
  transform: ${(props) => `translateX(${props.translation}%)`};
`;
const ListItem = styled.li`
  width: 100%;
`;
const Img = styled.img`
  display: block;
  width: 100%;
`;
const LeftNav = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightNav = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
