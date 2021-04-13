import React, { forwardRef } from "react";
import styled from "styled-components";
import HeaderBackground from "../assets/header.jpg";
import withMousePosition from "./hoc/withMousePosition";

const Header = forwardRef(({ mousePos }, ref) => {
  const parallaxStyles = {
    transform: `translate(${-mousePos.x / 100}px, ${-mousePos.y / 100}px)`,
  };

  return (
    <Container ref={ref}>
      <Background style={parallaxStyles}></Background>
      <Title>Booking App</Title>
      <Description>Z nami znajdziesz najlepsze hotele!</Description>
    </Container>
  );
});

export default withMousePosition(React.memo(Header));

const Container = styled.header`
  height: 200px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 600px) {
    height: 260px;
  }
`;

const Background = styled.div`
  position: absolute;
  top: -5%;
  left: -5%;
  right: -5%;
  bottom: -5%;
  background-image: ${`url(${HeaderBackground})`};
  background-position: center;
  background-size: 120%;
  background-repeat: no-repeat;
  z-index: -1;
  filter: brightness(0.4);
`;

const Title = styled.h1`
  color: #fff;
  font-size: ${(props) => props.theme.fonts.xxl};
  text-shadow: 1px 1px 4px #aaa;
`;

const Description = styled.h2`
  color: #fff;
  font-size: ${(props) => props.theme.fonts.xl};
  text-shadow: 1px 1px 4px #aaa;
`;
