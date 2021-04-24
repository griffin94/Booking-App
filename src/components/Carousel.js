import React, { useState } from "react";
import styled from "styled-components";
import KeyboardArrowLeftTwoToneIcon from "@material-ui/icons/KeyboardArrowLeftTwoTone";
import KeyboardArrowRightTwoToneIcon from "@material-ui/icons/KeyboardArrowRightTwoTone";
import { IconButton } from "./ui/UIComponents";

const Carousel = ({ images }) => {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(0);
  const position = -(active * 100) / images.length;

  const moveRight = () => {
    active === images.length - 1 ? setActive(0) : setActive(active + 1);
  };

  const moveLeft = () => {
    active === 0 ? setActive(images.length - 1) : setActive(active - 1);
  };

  const keyPressHandler = (e, index) => {
    e.key === "Enter" && setActive(index);
  };

  return (
    <Wrapper>
      <Slider>
        <List images={images.length} translation={position}>
          {images.map((image) => (
            <ListItem key={image.id}>
              <Img src={image.url} onClick={() => setModal(true)} />
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
      </Slider>
      <Gallery>
        {images.map((img, index) => (
          <ListItem key={img.id}>
            <SmallImg
              src={img.url}
              className={index === active && "active"}
              onClick={() => setActive(index)}
              onKeyPress={(e) => keyPressHandler(e, index)}
              role='button'
              tabIndex='0'
            />
          </ListItem>
        ))}
      </Gallery>
      <Modal active={modal} onClick={() => setModal(false)}>
        <Img src={images[active].url} />
      </Modal>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div``;

const Slider = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 6px;
`;
const List = styled.ul`
  list-style-type: none;
  width: ${(props) => `${props.images * 100}%`};
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => `translateX(${props.translation}%)`};
`;
const ListItem = styled.li`
  width: 100%;
`;
const Img = styled.img`
  display: block;
  width: 100%;
  cursor: pointer;
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

const Gallery = styled.ul`
  list-style-type: none;
  overflow: hidden;
  margin: 10px 0;
  display: flex;
`;

const SmallImg = styled(Img)`
  border-radius: 6px;
  border: 2px solid transparent;
  &.active,
  :focus {
    outline: none;
    border: 2px solid #009dff;
  }
`;

const Modal = styled.div`
  cursor: pointer;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
